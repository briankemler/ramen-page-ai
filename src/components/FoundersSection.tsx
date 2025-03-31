
import React from "react";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FounderProps {
  name: string;
  role: string;
  avatarText: string;
  linkedinUrl: string;
  imageSrc: string;
}

const Founder: React.FC<FounderProps> = ({ name, role, avatarText, linkedinUrl, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="w-32 h-32 mb-4 border-4 border-ramen-light-purple">
        <AvatarImage src={imageSrc} alt={`Photo of ${name}`} />
        <AvatarFallback className="bg-ramen-purple text-white text-2xl">
          {avatarText}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-ramen-gray mb-2">{role}</p>
      <a 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-ramen-purple hover:text-ramen-purple/80 transition-colors"
        aria-label={`${name}'s LinkedIn profile`}
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
};

const FoundersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-ramen-dark/70 text-lg">
            The visionaries behind Ramen AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          <Founder 
            name="Kevin Gough" 
            role="Co-Founder" 
            avatarText="KG" 
            linkedinUrl="https://www.linkedin.com/in/briankemler/"
            imageSrc="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
          />
          <Founder 
            name="Brian Kemler" 
            role="Co-Founder" 
            avatarText="BK" 
            linkedinUrl="https://www.linkedin.com/in/briankemler/"
            imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
