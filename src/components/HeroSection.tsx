
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const handleJoinWaitlist = () => {
    window.open("https://forms.gle/sFS841tsHWxk7wLE6", "_blank");
  };

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-ramen-light-purple to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/50 z-0"></div>
      <div 
        className="absolute top-20 right-20 w-64 h-64 bg-ramen-purple/10 rounded-full blur-3xl animate-float z-0"
        style={{ animationDelay: '0.5s' }}
      ></div>
      <div 
        className="absolute bottom-20 left-20 w-64 h-64 bg-ramen-purple/10 rounded-full blur-3xl animate-float z-0"
        style={{ animationDelay: '1s' }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text">Ramen AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-ramen-dark/80 max-w-3xl mb-8">
            No-code AI solutions to make your product more accessible and compliant.
          </p>
          <div className="flex gap-4">
            <Button 
              className="bg-ramen-purple hover:bg-ramen-purple/90 text-white rounded-full px-8 py-6 text-lg"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
