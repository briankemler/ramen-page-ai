
import React from "react";
import { CircleHelp, Lightbulb, Sparkles } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Democratizing <span className="gradient-text">Accessibility</span>
          </h2>
          <p className="text-ramen-dark/70 text-lg">
            Ramen AI makes Accessibility compliance simple, low cost and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb className="w-10 h-10 text-ramen-purple" />,
              title: "No-Code Solutions",
              description: "Harness the power of no-code AI to make your product more accessible."
            },
            {
              icon: <Sparkles className="w-10 h-10 text-ramen-purple" />,
              title: "Enhanced Accessibility",
              description: "Make your product accessible to everyone with AI-powered tools."
            },
            {
              icon: <CircleHelp className="w-10 h-10 text-ramen-purple" />,
              title: "Compliance Ready",
              description: "Comply with the European Accessibility Act (EAA)."
            }
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-ramen-light-purple rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-ramen-dark/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
