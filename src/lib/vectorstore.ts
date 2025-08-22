import { VectorStoreRetrieverMemory } from "langchain/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { Document } from "@langchain/core/documents";
import faqs from "@/data/faq.json";

let retriverPromise: VectorStoreRetrieverMemory | null = null;

export async function getMemory(sessionId: string) {
  if (!retriverPromise) {
    const docs: Document[] = (
      faqs as { question: string; answer: string; tags: string[] }[]
    ).map(
      (faq) =>
        new Document({
          pageContent: `${faq.question}\n${faq.answer}`,
          metadata: { source: "faq", tags: faq.tags || [] },
        })
    );

    const vectorStore = await MemoryVectorStore.fromDocuments(
      docs,
      new OpenAIEmbeddings({ model: "text-embedding-3-small" })
    );
    retriverPromise = new VectorStoreRetrieverMemory({
      metadata: { sessionId },
      vectorStoreRetriever: vectorStore.asRetriever(4),
      memoryKey: "chat_history",
    });
  }
  return retriverPromise;
}
