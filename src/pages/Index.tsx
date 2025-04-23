
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import FoundersSection from "@/components/FoundersSection";
import ContactSection from "@/components/ContactSection";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <FoundersSection />
      <ContactSection />
      
      <footer className="bg-white py-8 text-center text-ramen-gray text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Ramen AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
