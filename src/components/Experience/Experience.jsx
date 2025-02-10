// import ExperienceData from "../../data/ExperienceData";
import ExperienceContainer from "./ExperienceContainer";

export default function index() {
  return (
    <section id="experience" className="flex px-4 bg-white sm:px-0 lg:px-24 p-[60px] pb-0  justify-between flex-col" >
    <div className="w-full gap-5">
          <p className="text-[#0d0d0d]/80  font-bold text-[35px] tracking-[2px] uppercase">
            Experience
          </p>
        </div>

    <ExperienceContainer  />
  </section>
  );
}
