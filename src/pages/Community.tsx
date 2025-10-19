import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, ThumbsUp, MessageCircle, Linkedin, Mail, UserPlus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Community = () => {
  const { toast } = useToast();
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);
  const [joinFormData, setJoinFormData] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
    role: "Junior",
  });

  // posts removed per request — posts list will not be displayed

  const mentors = [
    {
      id: 1,
      name: "Aditya Kumar",
      college: "IIT Delhi",
      role: "Senior",
      linkedin: "https://linkedin.com",
      email: "aditya@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    },
    {
      id: 2,
      name: "Priya Sharma",
      college: "BITS Pilani",
      role: "Senior",
      linkedin: "https://linkedin.com",
      email: "priya@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      id: 3,
      name: "Rahul Verma",
      college: "NIT Trichy",
      role: "Junior",
      linkedin: "https://linkedin.com",
      email: "rahul@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    },
    {
      id: 4,
      name: "Ananya Singh",
      college: "IIIT Hyderabad",
      role: "Senior",
      linkedin: "https://linkedin.com",
      email: "ananya@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    },
    {
      id: 5,
      name: "Arjun Patel",
      college: "DTU Delhi",
      role: "Junior",
      linkedin: "https://linkedin.com",
      email: "arjun@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    },
    {
      id: 6,
      name: "Sneha Reddy",
      college: "VIT Vellore",
      role: "Senior",
      linkedin: "https://linkedin.com",
      email: "sneha@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    },
    {
      id: 7,
      name: "Karan Mehta",
      college: "MIT Manipal",
      role: "Junior",
      linkedin: "https://linkedin.com",
      email: "karan@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan",
    },
    {
      id: 8,
      name: "Ishita Gupta",
      college: "NSUT Delhi",
      role: "Senior",
      linkedin: "https://linkedin.com",
      email: "ishita@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ishita",
    },
    {
      id: 9,
      name: "Rohan Das",
      college: "Jadavpur University",
      role: "Junior",
      linkedin: "https://linkedin.com",
      email: "rohan@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
    },
    {
      id: 10,
      name: "Meera Iyer",
      college: "Anna University",
      role: "Senior",
      linkedin: "https://linkedin.com",
      email: "meera@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
    },
  ];

  const handleJoinCommunity = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New member:", joinFormData);
    
    toast({
      title: "Welcome to FirstStep Community 🎉",
      description: "You're now part of our learning community!",
    });
    
    setJoinFormData({ name: "", email: "", college: "", year: "", role: "Junior" });
    setIsJoinDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header and Create Post removed — page shows community members and join section below */}

          {/* People & Profiles Section */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-2">
                Meet Our <span className="text-primary">Community</span>
              </h2>
              <p className="text-muted-foreground">
                Where seniors guide and juniors rise 🌱
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl bg-background/30 backdrop-blur-lg border border-secondary/20 shadow-medium hover:shadow-large transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-highlight/5" />
                  
                  <div className="relative p-6 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-4 ring-2 ring-primary/20">
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    
                    <h3 className="font-semibold text-lg text-foreground mb-1">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{mentor.college}</p>
                    
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      mentor.role === "Senior" 
                        ? "bg-gradient-to-r from-primary to-secondary text-white" 
                        : "bg-gradient-to-r from-success to-secondary text-white"
                    }`}>
                      {mentor.role}
                    </span>
                    
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                      </a>
                      <a
                        href={`mailto:${mentor.email}`}
                        className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-secondary" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Join Community Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-background/30 backdrop-blur-lg border border-secondary/20 shadow-large overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-highlight/10" />
              
              <div className="relative p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-highlight mb-4">
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">Join Our Community</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Every programmer starts somewhere — start here. Connect with mentors, collaborate on projects, and grow together! 🚀
                </p>
                
                <Dialog open={isJoinDialogOpen} onOpenChange={setIsJoinDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="hero" size="lg">
                      Join Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-lg">
                    <DialogHeader>
                      <DialogTitle>Welcome to FirstStep! 🎉</DialogTitle>
                      <DialogDescription>
                        Fill in your details to join our community
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleJoinCommunity} className="space-y-4">
                      <div>
                        <Label htmlFor="join-name">Full Name</Label>
                        <Input
                          id="join-name"
                          placeholder="John Doe"
                          value={joinFormData.name}
                          onChange={(e) => setJoinFormData({ ...joinFormData, name: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="join-email">Email Address</Label>
                        <Input
                          id="join-email"
                          type="email"
                          placeholder="john@example.com"
                          value={joinFormData.email}
                          onChange={(e) => setJoinFormData({ ...joinFormData, email: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="join-college">College/University</Label>
                        <Input
                          id="join-college"
                          placeholder="IIT Delhi"
                          value={joinFormData.college}
                          onChange={(e) => setJoinFormData({ ...joinFormData, college: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="join-year">Current Year</Label>
                        <Input
                          id="join-year"
                          placeholder="2nd Year"
                          value={joinFormData.year}
                          onChange={(e) => setJoinFormData({ ...joinFormData, year: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="join-role">Role</Label>
                        <select
                          id="join-role"
                          value={joinFormData.role}
                          onChange={(e) => setJoinFormData({ ...joinFormData, role: e.target.value })}
                          className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background"
                          required
                        >
                          <option value="Junior">Junior (Looking to learn)</option>
                          <option value="Senior">Senior (Ready to mentor)</option>
                        </select>
                      </div>
                      <Button type="submit" variant="hero" className="w-full">
                        Join Community
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
