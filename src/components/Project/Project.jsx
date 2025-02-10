// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectContainer from "./ProjectContainer"
import ProjectData from "../../data/ProjectsData"


const index = () => {
  return (
    <div id="project" className="bg-white px-4 sm:px-0 lg:px-24 py-10">
        <div className="w-full flex  gap-5">
        <p className="text-[#0d0d0d]/80 font-bold text-[35px] tracking-[2px] uppercase">
         Project
        </p>
      </div>
      <ProjectContainer  data={ProjectData}/>

    </div>
  )
}

export default index
