import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 95, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "Java", level: 80, category: "languages" },
  { name: "R", level: 75, category: "languages" },
  { name: "C++", level: 70, category: "languages" },

  // AI/ML Tools
  { name: "TensorFlow", level: 90, category: "ai-ml" },
  { name: "Pandas", level: 95, category: "ai-ml" },
  { name: "Scikit-learn", level: 85, category: "ai-ml" },
  { name: "GPT-4 API", level: 90, category: "ai-ml" },
  { name: "Jupyter Notebook", level: 90, category: "ai-ml" },
  { name: "Tableau", level: 80, category: "ai-ml" },

  // Web Technologies
  { name: "React", level: 90, category: "web" },
  { name: "Node.js", level: 85, category: "web" },
  { name: "HTML/CSS", level: 90, category: "web" },

  // Platforms & Databases
  { name: "AWS", level: 80, category: "platforms" },
  { name: "MySQL", level: 85, category: "platforms" },
  { name: "PostgreSQL", level: 80, category: "platforms" },
];

const categories = ["all", "languages", "ai-ml", "web", "platforms"];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg text-center border border-border/50"
            >
              <h3 className="font-medium text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
