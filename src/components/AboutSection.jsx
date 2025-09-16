import { Code, Smartphone, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Application Developer
            </h3>

            <p className="text-muted-foreground">
              With hands-on experience in web development, I specialize in
              creating responsive, accessible, and performant web applications
              using modern technologies.
            </p>

            <p className="text-muted-foreground">
              Full-stack web developer specializing in MERN and Next.js. Experienced in building scalable web platforms with real-time data and AI integrations. Strong focus on REST APIs, authentication, and cloud-ready deployments. Eager to contribute to impactful software solutions in dynamic, fast-paced teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1_DQBoaMZlwNcmA2anHym2uHEy0hDj6la/view?usp=drive_link"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Dev Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Dev Card */}
            {/* <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Mobile App Development
                  </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Generative AI Badge Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Introduction to Generative AI
                  </h4>
                  <p className="text-muted-foreground">
                    Completed Google Cloud Skills Boost course and earned a
                    digital badge showcasing foundational knowledge of
                    Generative AI concepts.
                  </p>
                  <a
                    href="https://www.cloudskillsboost.google/public_profiles/a4c5f79c-78cf-412c-a4d0-d75dcd2e8091/badges/18350937" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary hover:underline"
                  >
                    View Badge →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
