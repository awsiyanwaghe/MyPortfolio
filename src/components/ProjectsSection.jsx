import { ArrowRight, ExternalLink, Github } from "lucide-react";
// import Welth from "../assets/projects/welth.png";
import Prescripto from "../assets/projects/prescripto.png";
import Ecommerce from "../assets/projects/ecommerce.png";
import QuickAI from "../assets/projects/quickai.png";
import XClone from "../assets/projects/x-clone.png";
import Blog from "../assets/projects/blog.png";

const projects = [
  // {
  //   id: 1,
  //   title: "Welth",
  //   description:
  //     "Finance tracker with Clerk auth, Gemini API receipts, Recharts charts.",
  //   image: Welth,
  //   tags: [
  //     "Next.js",
  //     "TailwindCSS",
  //     "Supabase",
  //     "Clerk",
  //     "Inngest",
  //     "ShadcnUI",
  //   ],
  //   demoUrl: "https://welth-gold.vercel.app/",
  //   githubUrl: "https://github.com/samipevekar/Welth.git",
  // },
  {
    id: 2,
    title: "Prescripto",
    description:
      "Doctor appointment system with scheduling, role-based access, Razorpay.",
    image: Prescripto,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "RazorPay",
      "TailwindCSS",
    ],
    demoUrl: "https://dr-appointment-1.onrender.com/",
    githubUrl: "https://github.com/awsiyanwaghe/Dr-appointment",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "MERN e-commerce with admin panel and secure Razorpay payments.",
    image: Ecommerce,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "RazorPay",
      "TailwindCSS",
    ],
    demoUrl: "https://e-commerce-sami.vercel.app/",
    githubUrl: "https://github.com/awsiyanwaghe/E-Commerce",
  },
  {
    id: 4,
    title: "Quick.ai",
    description:
      "Multi-tool AI app with user history, Gemini API, and Clerk auth.",
    image: QuickAI,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GeminiAPI",
      "Clerk",
      "TailwindCSS",
      "Cloudinary",
    ],
    demoUrl: "https://quick-ai-1.onrender.com/",
    githubUrl: "https://github.com/awsiyanwaghe/Quick.ai",
  },
  {
    id: 5,
    title: "X Clone",
    description:
      "X clone with story upload, Cloudinary storage, and unique features.",
    image: XClone,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Cloudinary",
      "TanStack Query",
      "DaisyUI",
    ],
    demoUrl: "https://x-frontend-kuz7.onrender.com/",
    githubUrl: "https://github.com/awsiyanwaghe/x-clone",
  },
  {
    id: 6,
    title: "Blog",
    description:
      "MERN blog platform for reading, sharing, and dynamic user content.",
    image: Blog,
    tags: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "TailwindCSS",
    ],
    demoUrl: "https://blog-1-b8t3.onrender.com/",
    githubUrl: "https://github.com/awsiyanwaghe/Blog",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
              style={{ minHeight: "450px" }} // minimum height for all cards
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* content */}
                <div className="">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                </div>

                {/* Links at the bottom */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/awsiyanwaghe"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
