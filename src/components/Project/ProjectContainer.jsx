import { useState } from "react";
import ProjectsData from "../../data/ProjectsData";

const ProjectContainer = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? ProjectsData : ProjectsData.slice(0, 3);

  return (
    <section className="py-12 px-6 md:px-16">
      <div className="flex flex-col gap-10">
        {visibleProjects.map((project, index) => (
          <div key={index} className="flex flex-col items-start ">
            {/* Project Header */}
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center">
                <img
                  src={project.icon}
                  alt={project.name}
                  className="w-[60px] h-[60px] object-cover"
                />
                <div className="ml-3">
                  <p className="text-[#2F2F2F] text-3xl font-bold">
                    {project.name}
                  </p>
                  <p className="text-[#2F2F2F]/60 text-2xl ">
                    {project.duration}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {project.links.map((link, linkIndex) => (
                  <img
                    key={linkIndex}
                    src={link.src}
                    alt={link.name}
                    className="w-6 h-6 cursor-pointer hover:opacity-80"
                    onClick={() => window.open(link.link, "_blank")}
                  />
                ))}
              </div>
            </div>

            {/* Project Description */}
            <ul className="mt-4 text-[#707070] list-disc pl-6">
              {project.main.map((line, lineIndex) => (
                <li
                  key={lineIndex}
                  className="text-[#0d0d0d]/90 mb-2 lg:text-[20px] sm:text-[18px]"
                >
                  {line}
                </li>
              ))}
            </ul>

            {/* icons */}
            <div className="flex flex-wrap justify-start items-center">
              {project.tech.map(
                (tech, techIndex) =>
                  tech.src && (
                    <div key={techIndex} className="m-2">
                      <img
                        className="w-16 h-16 object-contain rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                        src={tech.src}
                        alt={tech.name}
                      />
                      <p className="mt-2 text-center text-sm font-semibold text-gray-800">
                        {tech.name}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll((prevState) => !prevState)}
          className="px-6 py-3 text-lg font-semibold text-white bg-black/60 rounded-lg hover:bg-black/70 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default ProjectContainer;
