import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Send } from "lucide-react";
import { useState } from "react";

const Mentor = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm StepMate, your AI learning mentor. Ask me anything about programming, DSA, web dev, or career guidance! 🚀"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    
    // Simulate AI response (placeholder)
    setTimeout(() => {
      setMessages([...newMessages, {
        role: "assistant",
        content: "This is a placeholder response. In the next phase, I'll be connected to Gemini/GPT API to provide real answers! 🤖"
      }]);
    }, 1000);
    
    setInput("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 p-2 gradient-hero rounded-lg mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Learning <span className="text-primary">Mentor</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your 24/7 coding companion - StepMate
            </p>
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Chat with StepMate
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Messages Container */}
              <div className="space-y-4 mb-4 h-[500px] overflow-y-auto p-4 bg-muted/30 rounded-lg">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about coding, DSA, or career..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleSend} variant="hero">
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Suggestions */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInput("Explain recursion simply")}
                >
                  Explain recursion
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInput("Best way to learn React?")}
                >
                  Learn React
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInput("DSA roadmap for beginners")}
                >
                  DSA Roadmap
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-lg text-center text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 inline mr-2 text-secondary" />
            StepMate will be powered by Gemini API in the next phase
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mentor;
