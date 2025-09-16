import React from "react";

// Experience Data
const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "SNJL",
    duration: "Mar 2025 - June 2025",
    description:
      "Spearheaded the development of a full-stack Liquor Enterprise Management System (EMS), enabling centralized accounting, sales, and inventory management across 10+ shops.",
    skills: ["React", "React Native", "NodeJs", "ExpressJs", "PostgreSQL"],
    certificate:
      "https://drive.google.com/file/d/1eFNk-mlVfh07rNv9Hp5mQaN51P216Ba6/view",
    type: "Remote", // Badge info
  },
  // future internships/experience objects yaha add karte jao
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in">
            My <span className="text-primary">Experience</span>
          </h2>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative bg-card border border-border rounded-lg shadow-lg p-6 text-left space-y-4 opacity-0 animate-fade-in-delay-1"
              >
                {/* Top-right Badge */}
                {exp.type && (
                  <span className="absolute  top-[75px] md:top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow">
                    {exp.type}
                  </span>
                )}

                {/* Role & Company */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                </div>

                {/* Description */}
                <p className="text-base text-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="font-medium mb-2">Skills:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-3 py-1 bg-muted border border-primary text-sm rounded-full"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certificate Link */}
                {exp.certificate && (
                  <div className="pt-4">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
