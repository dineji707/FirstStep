import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink } from "lucide-react";

const Practice = () => {
  const topics = [
    {
      title: "Arrays",
      description: "Master array manipulation and searching algorithms",
      difficulty: "Easy",
      leetcode: "https://leetcode.com/tag/array/",
      gfg: "https://practice.geeksforgeeks.org/explore?category[]=Arrays",
    },
    {
      title: "Strings",
      description: "Learn string operations and pattern matching",
      difficulty: "Easy",
      leetcode: "https://leetcode.com/tag/string/",
      gfg: "https://practice.geeksforgeeks.org/explore?category[]=Strings",
    },
    {
      title: "Recursion",
      description: "Understand recursive thinking and backtracking",
      difficulty: "Medium",
      leetcode: "https://leetcode.com/tag/recursion/",
      gfg: "https://practice.geeksforgeeks.org/explore?category[]=Recursion",
    },
    {
      title: "Dynamic Programming",
      description: "Optimize solutions with memoization and tabulation",
      difficulty: "Hard",
      leetcode: "https://leetcode.com/tag/dynamic-programming/",
      gfg: "https://practice.geeksforgeeks.org/explore?category[]=Dynamic%20Programming",
    },
    {
      title: "Trees & Graphs",
      description: "Navigate complex data structures efficiently",
      difficulty: "Medium",
      leetcode: "https://leetcode.com/tag/tree/",
      gfg: "https://practice.geeksforgeeks.org/explore?category[]=Tree",
    },
    {
      title: "Linked Lists",
      description: "Master pointer manipulation and list operations",
      difficulty: "Easy",
      leetcode: "https://leetcode.com/tag/linked-list/",
      gfg: "https://practice.geeksforgeeks.org/explore?category[]=Linked%20List",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-success";
      case "Medium": return "text-secondary";
      case "Hard": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 p-2 gradient-hero rounded-lg mb-4">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Practice & Master <span className="text-primary">DSA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solve problems on LeetCode and GeeksforGeeks to strengthen your skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Card 
                key={index}
                className="hover:shadow-large transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <span className={`text-sm font-semibold ${getDifficultyColor(topic.difficulty)}`}>
                      {topic.difficulty}
                    </span>
                  </div>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href={topic.leetcode} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-between group-hover:border-primary">
                      Practice on LeetCode
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href={topic.gfg} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-between group-hover:border-success">
                      Practice on GFG
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Practice;
