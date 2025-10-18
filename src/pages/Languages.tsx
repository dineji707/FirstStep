import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, FileCode, Terminal, Braces } from "lucide-react";

const Languages = () => {
  const languages = [
    {
      name: "C Programming",
      description: "Master the foundation of programming with C",
      icon: Terminal,
      path: "/languages/c",
      gradient: "from-secondary via-primary to-success",
    },
    {
      name: "C++ Programming",
      description: "Object-oriented programming and advanced concepts",
      icon: Code2,
      path: "/languages/cpp",
      gradient: "from-primary via-secondary to-highlight",
    },
    {
      name: "Java",
      description: "Enterprise-level programming with Java",
      icon: FileCode,
      path: "/languages/java",
      gradient: "from-highlight via-destructive to-primary",
    },
    {
      name: "Python",
      description: "Modern, versatile programming for all domains",
      icon: Braces,
      path: "/languages/python",
      gradient: "from-success via-secondary to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 p-3 gradient-hero rounded-lg mb-6">
              <Code2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Learn <span className="text-primary">Programming</span> Languages
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master programming from basics to advanced. Learn. Build. Connect. Take your FirstStep 🚀
            </p>
          </motion.div>

          {/* Language Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => {
              const Icon = lang.icon;
              return (
                <motion.div
                  key={lang.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={lang.path}>
                    <div className="relative rounded-2xl bg-background/30 backdrop-blur-lg border border-secondary/20 shadow-medium hover:shadow-large transition-all overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${lang.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                      
                      <div className="relative p-8">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${lang.gradient} mb-4`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2 text-foreground">{lang.name}</h3>
                        <p className="text-muted-foreground mb-6">{lang.description}</p>
                        
                        <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                          Start Learning
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Languages;
