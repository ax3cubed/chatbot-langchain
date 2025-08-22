import { NextRequest } from "next/server";
import { getChain, runChain } from "@/lib/chain";
import faqs from "@/data/faq.json";
import { log } from "console";

export const runtime = "nodejs"; // ensure LangChain + OpenAI run in Node runtime

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json();
    if (!message || !sessionId) {
      return new Response(
        JSON.stringify({ error: "message and sessionId are required" }),
        { status: 400 }
      );
    }

    // build chain with memory bound to session
    const chain = await getChain(sessionId);

    // Find relevant FAQ context (simple keyword match, can be improved)
    const lowerMsg = message.toLowerCase();
    const relevantFaqs = (faqs as { question: string; answer: string }[])
      .filter(
        (faq) =>
          faq.question.toLowerCase().includes(lowerMsg) ||
          faq.answer.toLowerCase().includes(lowerMsg)
      )
      .slice(0, 3);
    const context = relevantFaqs.length
      ? relevantFaqs
          .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
          .join("\n\n")
      : "";
    log("Context:", context);

    // Combine context and message into a single input string
    const combinedInput = context
      ? `${context}\n\nUser question: ${message}`
      : message;
    const answer = await runChain(chain, {
      input: combinedInput,
    });
    const answerText =
      typeof answer === "object" && answer.text ? answer.text : answer;

    return new Response(JSON.stringify({ answer: answerText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: { message?: string } | unknown) {
    console.error("/api/chat error", err);
    return new Response(
      JSON.stringify({
        error: (err as { message?: string }).message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}
