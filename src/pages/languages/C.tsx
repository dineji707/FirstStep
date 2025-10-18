import Navbar from "@/components/Navbar";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import { motion } from "framer-motion";
import { Terminal, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const C = () => {
  const videos = [
    { id: "1", title: "Introduction to C Programming", videoId: "KJgsSFOSQv0" },
    { id: "2", title: "Variables and Data Types", videoId: "Bz0wE0mg4Ak" },
    { id: "3", title: "Control Structures - If/Else", videoId: "AXxJWvt9a6E" },
    { id: "4", title: "Loops in C", videoId: "PrctfkhR758" },
    { id: "5", title: "Functions in C", videoId: "0ZLX-JnujYA" },
    { id: "6", title: "Arrays and Pointers", videoId: "zuegQmMdy8M" },
    { id: "7", title: "Strings in C", videoId: "iSYO9qzukzg" },
    { id: "8", title: "Structures and Unions", videoId: "VLubWeU0hfA" },
  ];

  const practiceProblems = [
    { title: "Hello World", difficulty: "Easy", link: "https://leetcode.com/problems/fizz-buzz/" },
    { title: "Sum of Two Numbers", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/sum-of-two-numbers/" },
    { title: "Array Rotation", difficulty: "Medium", link: "https://leetcode.com/problems/rotate-array/" },
    { title: "String Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-secondary via-primary to-success rounded-2xl mb-6 shadow-large">
              <Terminal className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              C <span className="text-primary">Programming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              C is a powerful general-purpose programming language. It's the foundation of modern computing and used in operating systems, embedded systems, and system programming.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <YouTubePlaylist videos={videos} />
          </motion.div>

          {/* Articles & Notes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">Topic Notes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>What is C?</CardTitle>
                  <CardDescription>Understanding the basics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    C is a procedural programming language created in 1972. It provides low-level access to memory and requires minimal runtime support, making it perfect for system programming and embedded systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Why Learn C?</CardTitle>
                  <CardDescription>Key benefits</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Foundation for other languages (C++, Java)</li>
                    <li>• Direct hardware manipulation</li>
                    <li>• High performance and efficiency</li>
                    <li>• Used in OS development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Where is C Used?</CardTitle>
                  <CardDescription>Real-world applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Operating Systems (Linux, Windows kernel)</li>
                    <li>• Embedded Systems (IoT devices)</li>
                    <li>• Compilers and Interpreters</li>
                    <li>• Game Development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Learning Path</CardTitle>
                  <CardDescription>Step by step guide</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>1. Basics & Syntax</li>
                    <li>2. Control Structures & Loops</li>
                    <li>3. Functions & Recursion</li>
                    <li>4. Pointers & Memory Management</li>
                    <li>5. Data Structures</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Practice Problems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">Recommended Practice Problems</h2>
            <div className="grid gap-4">
              {practiceProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-background/30 backdrop-blur-lg border border-secondary/20 rounded-xl p-6 shadow-medium hover:shadow-large transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{problem.title}</h3>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        problem.difficulty === "Easy" ? "bg-success/20 text-success" :
                        problem.difficulty === "Medium" ? "bg-highlight/20 text-highlight" :
                        "bg-destructive/20 text-destructive"
                      }`}>
                        {problem.difficulty}
                      </span>
                    </div>
                    <Button variant="hero" asChild>
                      <a href={problem.link} target="_blank" rel="noopener noreferrer">
                        Solve <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default C;
