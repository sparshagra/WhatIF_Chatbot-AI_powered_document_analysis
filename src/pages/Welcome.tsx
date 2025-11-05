import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !location.trim()) {
      return;
    }

    setLoading(true);

    // Store in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userLocation", location);

    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      navigate("/chat");
    }, 500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden p-4"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(58,129,245,0.3), transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.3), transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }}
    >

      <Card className="w-full max-w-md shadow-[var(--shadow-card)] border-border/50">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Bot className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WHATIF CHATBOT
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Welcome! Let's get started with your information
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Current Location
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <Button
              type="submit"
              disabled={loading || !name.trim() || !location.trim()}
              className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-base font-semibold"
            >
              {loading ? "Starting..." : "Get Started"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Welcome;
