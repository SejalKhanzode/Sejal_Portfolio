import AnimatedTooltip from "../../UI/AnimatedTooltip";
import SkillsData from "../../data/SkillsData";

const index = () => {
  return (
    <main
      id="skills"
      className="px-4 sm:px-0 lg:px-24  w-full overflow-hidden  pb-10 pt-14"
    >
      <div className="w-full gap-8 text-white">
        <div>
        <p className=" font-bold text-[35px] tracking-[2px] uppercase">
          Skill Set
        </p>
        <h1>The skills that I acquired throughout my academics and internship experiences.</h1>

<h1>I have worked with a lot of tech and wants to keep exploring...</h1>
        </div>

        <div className=" flex flex-wrap items-center gap-7 justify-center py-6">
          <AnimatedTooltip items={SkillsData} />
        </div>
      </div>
    </main>
  );
};

export default index;
