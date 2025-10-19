import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LearningPathCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  progress?: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  colorClass: string;
  route: string;
}

const LearningPathCard = ({
  icon: Icon,
  title,
  description,
 
  progress = 0,
  difficulty,
  colorClass,
  route,
}: LearningPathCardProps) => {
  const difficultyColors = {
    Beginner: "text-success",
    Intermediate: "text-highlight",
    Advanced: "text-destructive",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-sky-200/40 relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-lg shadow-md">
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${colorClass}`} />
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <span className={`text-sm font-semibold ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            
            <span>{progress}% Free</span>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <Progress 
              value={progress} 
              className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-sky-400 [&>div]:via-blue-400 [&>div]:to-red-400" 
            />
          </div>

          {/* Action Button */}
          <Link to={route}>
            <Button 
              variant="secondary" 
              className="w-full group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-blue-400 group-hover:to-red-400 group-hover:text-white transition-all duration-300"
            >
              {progress > 0 ? "Continue Learning" : "Start Learning"}
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default LearningPathCard;
