import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: "primary" | "hero";
}

const FeatureCard = ({ icon: Icon, title, description, gradient = "primary" }: FeatureCardProps) => {
  return (
    <Card className="group p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
      <div className={`inline-flex p-3 rounded-lg mb-4 gradient-${gradient} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};

export default FeatureCard;
