import { ArrowDown } from "lucide-react";
import profileImg from "../assets/profile.jpg"; // apni image ka actual path yaha use karein

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 ">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <img
              src={profileImg}
              alt="Profile"
              className="w-32 h-32 p-1 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-primary opacity-0 animate-fade-in"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Awsiyan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Waghe
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
         Full-stack developer skilled in MERN and Next.js, with experience in building scalable platforms, real-time data integrations, AI solutions, and cloud deployments.
          </p>

          {/* Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
