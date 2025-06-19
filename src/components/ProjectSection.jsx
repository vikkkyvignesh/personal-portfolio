/* eslint-disable no-unused-vars */
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Todo List",
    description:
      "Created a To-Do List web app using React and Firebase, enabling users to add tasks, manage checklists, and edit to-dos in real-time.",
    image: "/projects/Proj_1.png",
    tags: ["React", "Firebase", "CSS"],
    demoUrl: "https://todo-rx0k.onrender.com",
    githubUrl: "https://github.com/vikkkyvignesh/todo",
  },
  {
    id: 2,
    title: "Promptopia",
    description:
      "Built Promptopia, a web app  where users can create, view, edit, and delete custom prompts shared with others.",
    image: "/projects/Proj_2.png",
    tags: ["Next JS", "Mongo Atlas", "Tailwind CSS", "OAuth"],
    demoUrl: "https://promptopia-teal-five.vercel.app",
    githubUrl: "https://github.com/vikkkyvignesh/promptopia",
  },
  {
    id: 3,
    title: "Agile Code Board ",
    description:
      "Developed Agile Code Board, a collaborative project management tool with workspaces, role-based access, task tracking for agile development teams.",
    image: "/projects/Proj_3.png",
    tags: ["Next JS", "Appwrite", "Tailwind CSS", "Shadcn", "Hono JS"],
    demoUrl: "https://agile-code.vercel.app/sign-in",
    githubUrl: "https://github.com/vikkkyvignesh/agile-code",
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      "Built a full-stack E-commerce app using React and Node.js with payment gateway integration, user auth, product management, and cart/order features.",
    image: "/projects/Proj_4.png",
    tags: ["React JS", "Mongo Atlas", "Tailwind CSS", "Node JS"],
    demoUrl: "https://e-commerce-mpv1.onrender.com",
    githubUrl: "https://github.com/vikkkyvignesh/mern-ecommerce",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover  object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20  text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className=" bottom-0 relative text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vikkkyvignesh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
