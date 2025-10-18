import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Target, Flame, Star, Edit, LogOut } from "lucide-react";

const Profile = () => {
  const userData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    level: 15,
    xp: 3450,
    xpToNextLevel: 4000,
    streak: 12,
    badges: [
      { name: "First Step", icon: "🎯", description: "Completed first module" },
      { name: "Problem Solver", icon: "🧩", description: "Solved 50 problems" },
      { name: "Consistent Learner", icon: "🔥", description: "7-day streak" },
      { name: "Community Helper", icon: "🤝", description: "Helped 10 students" },
    ],
    progress: {
      dsa: 65,
      webdev: 40,
      ai: 25,
      corecs: 50,
    },
    recentActivity: [
      { action: "Completed Arrays module", date: "Today" },
      { action: "Solved 5 LeetCode problems", date: "Yesterday" },
      { action: "Helped in Community forum", date: "2 days ago" },
      { action: "Started Dynamic Programming", date: "3 days ago" },
    ]
  };

  const progressPercentage = (userData.xp / userData.xpToNextLevel) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Profile Header */}
          <Card className="mb-8 animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-primary">
                  <AvatarFallback className="text-3xl bg-gradient-hero text-white">
                    {userData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
                  <p className="text-muted-foreground mb-4">{userData.email}</p>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Level {userData.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="h-5 w-5 text-highlight" />
                      <span className="font-semibold">{userData.streak} Day Streak</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-secondary" />
                      <span className="font-semibold">{userData.xp} XP</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>

              {/* XP Progress */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress to Level {userData.level + 1}</span>
                  <span className="font-semibold">{userData.xp} / {userData.xpToNextLevel} XP</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Badges Section */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
                <CardDescription>Badges you've earned on your journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {userData.badges.map((badge, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg text-center hover:shadow-medium transition-all"
                    >
                      <div className="text-4xl mb-2">{badge.icon}</div>
                      <h3 className="font-semibold mb-1">{badge.name}</h3>
                      <p className="text-xs text-muted-foreground">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Learning Progress
                </CardTitle>
                <CardDescription>Your progress across different paths</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(userData.progress).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium capitalize">{key.replace('corecs', 'Core CS')}</span>
                      <span className="text-muted-foreground">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your learning journey timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
