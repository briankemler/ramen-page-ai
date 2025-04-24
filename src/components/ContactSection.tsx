
import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleClick = () => {
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

        <div className="max-w-md mx-auto text-center">
          <Button 
            onClick={handleClick} 
            className="bg-ramen-purple hover:bg-ramen-purple/90"
          >
            <Send className="h-4 w-4 mr-2" />
            Join Waitlist
          </Button>
          <p className="text-sm text-ramen-white/50 mt-4">
            We're currently in the pre-seed stage and are operating in semi-stealth mode.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

