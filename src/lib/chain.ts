import { getMemory } from "@/lib/vectorstore";
import { BaseMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { LLMChain } from "langchain/chains";

export function buildprompt() {
  return ChatPromptTemplate.fromMessages([
    {
      role: "system",
      content: [
        "You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.",
        "If you don't know the answer, just say that you don't know, don't try to make up an answer.",
        "Use three sentences maximum.",
        "Always answer in markdown format.",
      ].join(" "),
    },
    new MessagesPlaceholder("chat_history"),
    ["human", "{input}"],
  ]);
}

export async function getChain(sessionId: string) {
  const model = new ChatOpenAI({
    temperature: 1,
    modelName: "gpt-4o-mini",
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const memory = await getMemory(sessionId);
  const prompt = buildprompt();
  const chain = new LLMChain({
    llm: model,
    prompt,
    memory,
  });
  return chain;
}

export async function runChain(
  chain: Awaited<ReturnType<typeof getChain>>,
  input: { input: string; context?: string; history?: BaseMessage[] }
) {
  return chain.invoke(input);
}
