
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Rss } from "lucide-react";

const NEWS_ITEMS = [
  {
    date: "April 2025",
    title: "Character VC Foundation Sprint",
    content: "Character VC has selected RamenAI to take part in its exclusive, first-time in person Foundation Sprint in San Francisco on April 22nd and April 23rd. RamenAI is honored to be part of this select group.",
    link: {
      text: "foundation sprint",
      url: "https://www.character.vc/fsw"
    }
  },
  {
    date: "April 2025",
    title: "Pre-seed Stage Announcement",
    content: "We're excited to announce that Ramen AI is now in the pre-seed stage, working towards making accessibility seamless for everyone.",
  },
  {
    date: "March 2025",
    title: "Early Access Program",
    content: "Join our exclusive early access program to be among the first to experience our AI-powered accessibility solutions.",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Newspaper className="w-8 h-8 text-ramen-purple" />
            <Rss className="w-6 h-6 text-ramen-purple" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest <span className="gradient-text">Updates</span>
          </h2>
          <p className="text-ramen-dark/70 text-lg">
            Stay informed about our journey and progress
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {NEWS_ITEMS.map((item, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{item.title}</span>
                  <span className="text-sm text-ramen-gray">{item.date}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ramen-dark/70 mb-2">{item.content}</p>
                {item.link && (
                  <a 
                    href={item.link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-ramen-purple hover:underline"
                  >
                    {item.link.text}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

