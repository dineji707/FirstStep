import Navbar from "@/components/Navbar";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Cpp = () => {
  const videos = [
    { id: "1", title: "Introduction to C++", videoId: "vLnPwxZdW4Y" },
    { id: "2", title: "Object-Oriented Programming Basics", videoId: "wN0x9eZLix4" },
    { id: "3", title: "Classes and Objects", videoId: "ZDa-Z5JzLYM" },
    { id: "4", title: "Inheritance in C++", videoId: "X8nYM8wdNRE" },
    { id: "5", title: "Polymorphism Explained", videoId: "4NYoLA4eRY4" },
    { id: "6", title: "STL - Standard Template Library", videoId: "RRubcjpTkks" },
    { id: "7", title: "Exception Handling", videoId: "WV5KqXfgB0A" },
    { id: "8", title: "File Handling in C++", videoId: "EaHFhms_Shw" },
  ];

  const practiceProblems = [
    { title: "Class Design - Rectangle", difficulty: "Easy", link: "https://leetcode.com/problems/design-parking-system/" },
    { title: "Operator Overloading", difficulty: "Medium", link: "https://www.geeksforgeeks.org/problems/operator-overloading/" },
    { title: "Inheritance Hierarchy", difficulty: "Medium", link: "https://leetcode.com/problems/design-browser-history/" },
    { title: "STL Containers Usage", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
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
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-primary via-secondary to-highlight rounded-2xl mb-6 shadow-large">
              <Code2 className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              C++ <span className="text-primary">Programming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              C++ extends C with object-oriented features. It's widely used in game development, system software, and high-performance applications where efficiency is critical.
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
                  <CardTitle>What is C++?</CardTitle>
                  <CardDescription>Understanding OOP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    C++ is an extension of C that adds object-oriented programming features. It supports procedural, object-oriented, and generic programming, making it extremely versatile.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Why Learn C++?</CardTitle>
                  <CardDescription>Key advantages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Object-Oriented Programming paradigm</li>
                    <li>• High performance with low-level control</li>
                    <li>• Rich Standard Template Library (STL)</li>
                    <li>• Industry standard for game development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>Where is C++ Used?</CardTitle>
                  <CardDescription>Applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Game Engines (Unreal Engine, Unity)</li>
                    <li>• Graphics Applications (Adobe products)</li>
                    <li>• Database Systems (MySQL, MongoDB)</li>
                    <li>• Web Browsers (Chrome, Firefox)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/30 backdrop-blur-lg border-secondary/20 shadow-medium hover:shadow-large transition-all">
                <CardHeader>
                  <CardTitle>OOP Concepts</CardTitle>
                  <CardDescription>Four pillars</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>1. Encapsulation - Data hiding</li>
                    <li>2. Inheritance - Code reusability</li>
                    <li>3. Polymorphism - Many forms</li>
                    <li>4. Abstraction - Essential features</li>
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

export default Cpp;
