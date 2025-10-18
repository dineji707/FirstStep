import Navbar from "@/components/Navbar";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import { motion } from "framer-motion";
import { Braces, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Python = () => {
  const videos = [
    { id: "1", title: "Python Basics for Beginners", videoId: "_uQrJ0TkZlc" },
    { id: "2", title: "Python Data Structures", videoId: "pkYVOmU3MgA" },
    { id: "3", title: "Functions and Modules", videoId: "9Os0o3wzS_I" },
    { id: "4", title: "File Handling in Python", videoId: "Uh2ebFW8OYM" },
    { id: "5", title: "OOP in Python", videoId: "qiSCMNBIP2g" },
    { id: "6", title: "Python Libraries - NumPy", videoId: "QUT1VHiLmmI" },
    { id: "7", title: "Data Analysis with Pandas", videoId: "vmEHCJofslg" },
    { id: "8", title: "Web Development with Django", videoId: "rHux0gMZ3Eg" },
  ];

  const practiceProblems = [
    { title: "List Comprehension", difficulty: "Easy", link: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
    { title: "Dictionary Operations", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
    { title: "String Methods", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { title: "Lambda & Map Functions", difficulty: "Medium", link: "https://www.geeksforgeeks.org/problems/python-lambda/" },
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
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-success via-secondary to-primary rounded-2xl mb-6 shadow-large">
              <Braces className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Python <span className="text-primary">Programming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Python is a high-level, interpreted language known for its simplicity and readability. It's perfect for beginners and powers everything from web apps to AI.
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
                  <CardTitle>What is Python?</CardTitle>
                  <CardDescription>Easy to learn</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Python is an interpreted, high-level programming language with dynamic semantics. Its simple syntax emphasizes readability, making it ideal for beginners and rapid development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Why Learn Python?</CardTitle>
                  <CardDescription>Versatility</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Easy to read and learn</li>
                    <li>• Vast library ecosystem</li>
                    <li>• Great for AI/ML and Data Science</li>
                    <li>• Active community support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Where is Python Used?</CardTitle>
                  <CardDescription>Applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Web Development (Django, Flask)</li>
                    <li>• Data Science & Machine Learning</li>
                    <li>• Automation & Scripting</li>
                    <li>• Scientific Computing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Python Strengths</CardTitle>
                  <CardDescription>Key features</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>1. Simple & Readable Syntax</li>
                    <li>2. Interpreted Language</li>
                    <li>3. Dynamic Typing</li>
                    <li>4. Rich Standard Library</li>
                    <li>5. Cross-platform</li>
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

export default Python;
