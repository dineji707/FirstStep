import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Youtube, FileText, ExternalLink, Code2, Brain } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "DSA Roadmap",
      icon: Code2,
      color: "text-primary",
      items: [
        { title: "Striver's A2Z DSA Sheet", link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2", type: "Guide" },
        { title: "NeetCode Roadmap", link: "https://neetcode.io/roadmap", type: "Practice" },
        { title: "DSA Playlist - Kunal Kushwaha", link: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ", type: "Video" },
      ]
    },
    {
      category: "Web Development",
      icon: BookOpen,
      color: "text-secondary",
      items: [
        { title: "Full Stack Open", link: "https://fullstackopen.com/en/", type: "Course" },
        { title: "JavaScript.info", link: "https://javascript.info/", type: "Tutorial" },
        { title: "React Official Docs", link: "https://react.dev/", type: "Docs" },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "text-highlight",
      items: [
        { title: "Fast.ai Practical Deep Learning", link: "https://course.fast.ai/", type: "Course" },
        { title: "Andrew Ng ML Course", link: "https://www.coursera.org/learn/machine-learning", type: "Course" },
        { title: "Kaggle Learn", link: "https://www.kaggle.com/learn", type: "Practice" },
      ]
    },
    {
      category: "Core CS Subjects",
      icon: FileText,
      color: "text-success",
      items: [
        { title: "GATE CS Notes", link: "https://www.geeksforgeeks.org/gate-cs-notes-gq/", type: "Notes" },
        { title: "OS by Neso Academy", link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", type: "Video" },
        { title: "DBMS by Knowledge Gate", link: "https://www.youtube.com/playlist?list=PLmXKhU9FNesSU5lwV7Dz8-jIEUXDNmZ0L", type: "Video" },
      ]
    },
    {
      category: "Interview Prep",
      icon: Youtube,
      color: "text-destructive",
      items: [
        { title: "LeetCode Patterns", link: "https://seanprashad.com/leetcode-patterns/", type: "Guide" },
        { title: "System Design Primer", link: "https://github.com/donnemartin/system-design-primer", type: "GitHub" },
        { title: "Tech Interview Handbook", link: "https://www.techinterviewhandbook.org/", type: "Guide" },
      ]
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Video": return "bg-destructive/10 text-destructive";
      case "Course": return "bg-secondary/10 text-secondary";
      case "Practice": return "bg-success/10 text-success";
      case "Guide": return "bg-primary/10 text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 p-2 gradient-hero rounded-lg mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learning <span className="text-primary">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated collection of courses, guides, and materials to accelerate your learning
            </p>
          </div>

          <div className="space-y-8">
            {resources.map((category, catIndex) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={catIndex}
                  className="animate-fade-in"
                  style={{ animationDelay: `${catIndex * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                      <CardTitle className="text-2xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="p-4 rounded-lg border bg-card hover:shadow-medium transition-all group"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                              {item.type}
                            </span>
                          </div>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="w-full mt-2">
                              View Resource
                              <ExternalLink className="h-3 w-3 ml-2" />
                            </Button>
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;
