import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "HTML5", category: "languages" },
  { name: "CSS3", category: "languages" },
  { name: "Object-Oriented Programming", category: "languages" },

  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "ShadCN UI", category: "frontend" },
  { name: "Responsive Web Design", category: "frontend" },
  { name: "Cross-Browser Compatibility", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "Authentication & Authorization", category: "backend" },
  { name: "API Design", category: "backend" },
  { name: "Microservices", category: "backend" },

  // Databases
  { name: "PostgreSQL", category: "databases" },
  { name: "MongoDB", category: "databases" },
  { name: "Firebase", category: "databases" },
  { name: "Supabase", category: "databases" },
  { name: "Database Schema Design", category: "databases" },
  { name: "Query Optimization", category: "databases" },

  // Tools
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "TanStack Query", category: "tools" },
  { name: "CI/CD Pipelines", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "languages", "frontend", "backend", "databases", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-2 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
