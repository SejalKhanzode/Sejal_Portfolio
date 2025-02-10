import { HiAcademicCap } from "react-icons/hi2";
import EducationData from "../../data/EducationData";
import building from "../../assets/education/bit.jpg";


const index = () => {
  return (
    <main id="education" className="w-full px-4 sm:px-0 lg:px-24 py-10 overflow-hidden">
<div className="w-full">
<p className="text-white font-bold text-[35px] tracking-[2px] uppercase">
            EDUCATION
          </p>
      </div>
      <div className="w-full lg:px-0 m-auto mt-14 flex flex-wrap items-center justify-center gap-10">
        {EducationData.map((data, index) => (
          <div className="flex items-center gap-5" key={index}>
            <HiAcademicCap className="h-8 w-8 text-gray-300" />
            <div className="flex flex-col">
              <p className="text-[16px] font-bold text-gray-400">{data.year}</p>
              <p className="text-gray-200 text-[22px] font-semibold pt-1">
                {data.degree}
              </p>
              <p className="text-gray-300 text-[18px]">{data.college}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-start px-10 pb-10 pt-20">
        <img
          src={building}
          alt="Building"
          className="w-full md:w-2/3 xl:w-3/5 h-60 object-cover rounded-[10px]"
        />
      </div>
    </main>
  );
};

export default index;
