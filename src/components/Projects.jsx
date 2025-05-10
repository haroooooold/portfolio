import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Hermes Accounting System",
    description: `Built an accounting system with modules for financial management and reporting, improving operational efficiency by 25%.
                  Optimized MySQL database for fast data retrieval and delivered user-friendly`,
    image: "/assets/project1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Xenia Cloud",
    description: `Developed a cloud-based Front Office and Accounting System to streamline business operations.
                  Designed a scalable architecture, integrating React for the frontend and Node.js for backend services.
                  Optimized database performance using MySQL for schema design and query efficiency`,
    image: "/assets/project2.webp",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div
      className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
      id="projects"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">
                {project.title}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
