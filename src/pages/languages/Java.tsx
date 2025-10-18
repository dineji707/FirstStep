import Navbar from "@/components/Navbar";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import { motion } from "framer-motion";
import { FileCode, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Java = () => {
  const videos = [
    { id: "1", title: "Java Basics & Setup", videoId: "eIrMbAQSU34" },
    { id: "2", title: "Variables and Data Types", videoId: "so1iUWaLmKA" },
    { id: "3", title: "OOP in Java", videoId: "IUqKuGNasdM" },
    { id: "4", title: "Collections Framework", videoId: "viTHc_4XfCA" },
    { id: "5", title: "Exception Handling", videoId: "1XAfapkBQjk" },
    { id: "6", title: "Multithreading", videoId: "TCd8QIS-2KI" },
    { id: "7", title: "Java Streams API", videoId: "t1-YZ6bF-g0" },
    { id: "8", title: "Spring Boot Basics", videoId: "vtPkZShrvXQ" },
  ];

  const practiceProblems = [
    { title: "String Manipulation", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-string/" },
    { title: "ArrayList Operations", difficulty: "Easy", link: "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
    { title: "HashMap Problems", difficulty: "Medium", link: "https://leetcode.com/problems/group-anagrams/" },
    { title: "Multi-threading Challenge", difficulty: "Hard", link: "https://leetcode.com/problems/print-in-order/" },
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
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-highlight via-destructive to-primary rounded-2xl mb-6 shadow-large">
              <FileCode className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Java <span className="text-primary">Programming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Java is a versatile, object-oriented language known for its "write once, run anywhere" capability. It's the backbone of enterprise applications and Android development.
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
                  <CardTitle>What is Java?</CardTitle>
                  <CardDescription>Platform independence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Java is a high-level, class-based, object-oriented programming language. It's designed to have minimal implementation dependencies and runs on the Java Virtual Machine (JVM).
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Why Learn Java?</CardTitle>
                  <CardDescription>Industry demand</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Platform-independent (WORA)</li>
                    <li>• Rich ecosystem and libraries</li>
                    <li>• Strong community support</li>
                    <li>• Excellent for enterprise applications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Where is Java Used?</CardTitle>
                  <CardDescription>Real-world usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Android App Development</li>
                    <li>• Enterprise Applications (Banking, Finance)</li>
                    <li>• Web Applications (Spring Framework)</li>
                    <li>• Big Data Technologies (Hadoop, Spark)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Java Features</CardTitle>
                  <CardDescription>Core strengths</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>1. Object-Oriented</li>
                    <li>2. Platform Independent</li>
                    <li>3. Secure & Robust</li>
                    <li>4. Multithreaded</li>
                    <li>5. Automatic Memory Management</li>
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

export default Java;
