import { ChatInterface } from "@/components/chat-ui";
import { FaqAccordion } from "@/components/accordion-page";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif font-black text-4xl md:text-6xl mb-6 text-foreground">
            Your AI Assistant
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Experience intelligent conversations with our advanced AI assistant.
            Get instant help, answers, and support whenever you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Chatting
            </button>
            <button className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-3xl text-center mb-12">
            Why Choose Our AI Assistant?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get instant responses to your questions with our optimized AI
                technology
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">
                Always Accurate
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Reliable information and helpful responses you can trust
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">
                Secure & Private
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your conversations are protected with enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 w-6/12 flex flex-col mx-auto">
        <h2 className="font-serif font-bold text-3xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <FaqAccordion />
      </section>

      {/* Chat Interface */}
      <ChatInterface />
    </main>
  );
}
