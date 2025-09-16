import React from "react";

// Dummy logos (apne assets ke path yaha use karein)
import hirwalLogo from "../assets/hirwal.png";
import fajandarLogo from "../assets/fajandar.png";

// Education Data
const educationData = [
  {
    id: 1,
    institution: "Hirwal Education Trust, Mahad",
    degree: "Bachelor of Science - Computer Science",
    duration: "June 2022 - April 2025",
    grade: "9.77 CGPA",
    description:
      "I completed my Bachelor's degree in Computer Science at Hirwal Education Trust, Mahad.",
    logo: hirwalLogo,
  },
  {
    id: 2,
    institution: "Fajandar Education Trust, Vahoor",
    degree: "HSC (XII), Science",
    duration: "June 2020 - April 2022",
    grade: "74.14%",
    description:
      "I completed my class 12 high school education at Fajandar Education Trust, Vahoor, where I studied Science with Computer.",
    logo: fajandarLogo,
  },
];

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in">
            My <span className="text-primary">Education</span>
          </h2>

          {/* Education Cards */}
          <div className="space-y-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="bg-card border border-border rounded-lg shadow-lg p-6 flex items-start gap-4 text-left opacity-0 animate-fade-in-delay-1"
              >
                {/* Logo */}
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-16 h-16 object-contain bg-white rounded-md border border-muted"
                />

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">
                    {edu.institution}
                  </h3>
                  <p className="text-base font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Grade: {edu.grade}
                  </p>
                  {/* <p className="text-base text-foreground leading-relaxed">
                    {edu.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
