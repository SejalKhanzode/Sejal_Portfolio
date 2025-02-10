import ExperienceData from "../../data/ExperienceData";

export default function ExperienceContainer() {
  return (
    <section>
      {ExperienceData.map((exp) => {
        return (
          <>
            <section className=" md:mx-12 lg:mx-[60px] my-4 flex flex-col lg:items-start items-center mb-12">
              <div className="flex flex-col lg:flex-row items-center text-lg md:text-2xl lg:text-3xl space-y-4 lg:space-y-0">
                {/* exp name and logo */}
                <img
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-[70px] lg:h-[70px] rounded-full"
                  src={exp.icon}
                  alt={exp.name}
                />
                <div className="text-center lg:text-left lg:ml-6">
                  <p className="text-[#0d0d0d]/80 font-bold">{exp.name}</p>
                  <p className="text-[#0d0d0d]/50 font-bold text-2xl md:text-1xl ">
                    {exp.duration}
                  </p>
                </div>
              </div>

              <div className="mt-4 pl-3 lg:ml-20 w-full space-y-3">
                {exp.main.map((line, index) => {
                  return (
                    <div
                      className="flex items-center gap-3 space-x-2 opacity-70"
                      key={index}
                    >
                      {/* Custom Bullet */}
                      <div className="w-2 h-2 bg-[#0d0d0d] rounded-full"></div>
                      {/* Text Content */}
                      <p className="text-[#0d0d0d]/90 lg:text-[20px] sm:text-[18px]">
                        {line}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        );
      })}
    </section>
  );
}
