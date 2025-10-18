import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const events = [
    {
      id: 1,
      title: "Google HashCode 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Online",
      type: "Coding Contest",
      participants: "5000+",
      gradient: "from-primary to-secondary",
    },
    {
      id: 2,
      title: "HackMIT 2024",
      date: "April 20-22, 2024",
      time: "48 Hours",
      location: "MIT, Boston",
      type: "Hackathon",
      participants: "1000+",
      gradient: "from-secondary to-success",
    },
    {
      id: 3,
      title: "AI/ML Workshop Series",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      type: "Webinar",
      participants: "500+",
      gradient: "from-highlight to-destructive",
    },
    {
      id: 4,
      title: "Codeforces Round #850",
      date: "March 18, 2024",
      time: "8:00 PM - 10:00 PM",
      location: "Online",
      type: "Coding Contest",
      participants: "10000+",
      gradient: "from-success to-primary",
    },
    {
      id: 5,
      title: "TechCrunch Disrupt",
      date: "May 10-12, 2024",
      time: "Full Day",
      location: "San Francisco",
      type: "Tech Conference",
      participants: "2000+",
      gradient: "from-primary to-highlight",
    },
  ];

  const handleSubmit = (e: React.FormEvent, eventTitle: string) => {
    e.preventDefault();
    // Here you would typically send the data to your backend/database
    console.log("Registration:", { ...formData, event: eventTitle });
    
    toast({
      title: "Registration Successful! 🎉",
      description: `You're registered for ${eventTitle}`,
    });
    
    setFormData({ name: "", email: "" });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 p-3 gradient-hero rounded-lg mb-6">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Upcoming <span className="text-primary">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join coding contests, hackathons, and tech webinars. Never miss an opportunity! 🚀
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl bg-background/30 backdrop-blur-lg border border-secondary/20 shadow-medium hover:shadow-large transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-5`} />
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${event.gradient} text-white`}>
                          {event.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-4">{event.title}</h3>
                      
                      <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-secondary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-success" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-highlight" />
                          <span>{event.participants} participants</span>
                        </div>
                      </div>
                    </div>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="hero" size="lg" className="w-full md:w-auto">
                          Register Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-lg">
                        <DialogHeader>
                          <DialogTitle>Register for {event.title}</DialogTitle>
                          <DialogDescription>
                            Fill in your details to secure your spot
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={(e) => handleSubmit(e, event.title)} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              className="mt-1"
                            />
                          </div>
                          <Button type="submit" variant="hero" className="w-full">
                            Confirm Registration
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
