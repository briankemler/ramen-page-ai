
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://forms.gle/k4GdxJDY6gxKT3d9A", "_blank");
  };

  return (
    <section className="py-20 bg-ramen-dark text-white clip-path-slant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our <span className="text-ramen-purple">Waitlist</span>
          </h2>
          <p className="text-ramen-white/70 text-lg">
            Be the first to know when we launch
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-ramen-purple hover:bg-ramen-purple/90">
              <Send className="h-4 w-4 mr-2" />
              Join
            </Button>
          </form>
          <p className="text-sm text-ramen-white/50 mt-4 text-center">
            We're currently in stealth mode. By joining our waitlist, you'll be the first to know when we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
