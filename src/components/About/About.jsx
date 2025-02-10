"use client";

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const index = () => {
  return (
    <main
      id="about"
      className="w-auto px-4 sm:px-0 lg:px-24 overflow-hidden lg:p-20 sm:p-5"
    >
      <div className="w-full  gap-5">
        <p className="text-white font-bold text-[35px] tracking-[2px] uppercase">
          ABOUT ME
        </p>
      </div>
      <div className=" m-auto mt-8 flex flex-col items-start gap-3 text-justify">
        <p className="text-[#f1f1f1] text-2xl leading-9 tracking-[1px]">
          I am a recent graduate with a B.Tech in Computer Engineering from
          Bajaj Institute of Technology, Wardha.
        </p>
        <p className="text-[#f1f1f1] text-2xl leading-9 tracking-[1px]">
          A passionate and enthusiastic Full Stack Web Developer, I thrive on
          crafting engaging and interactive websites and web applications.{" "}
        </p>
        <p className="text-[#f1f1f1] text-2xl leading-9 tracking-[1px]">
          Currently, I&apos;m exploring Next.js and strengthening my
          understanding of Data Structures and Algorithms.
        </p>
        <p className="text-[#f1f1f1] text-2xl leading-9 tracking-[1px]">
          My journey in web development is fueled by a relentless curiosity to
          explore new technologies, and I&apos;ve always been eager to learn,
          which led to me receiving the Lila Poonawala Foundation Scholarship.{" "}
        </p>
        <p className="text-[#f1f1f1] text-2xl leading-9 tracking-[1px]">
        Outside of coding, I love to cook 💖
        </p>

        <div className="w-full flex items-center justify-between mt-5">
          <div className="flex items-center gap-4">
            <div
              onClick={() =>
                window.open("https://www.linkedin.com/in/sejal-khanzode/")
              }
              className="z-20 cursor-pointer w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110"
            >
              <FaLinkedinIn className="text-white text-3xl" />
            </div>
            <div
              onClick={() => window.open("https://github.com/SejalKhanzode")}
              className="z-20 cursor-pointer w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110"
            >
              <IoLogoGithub className="text-white text-3xl" />
            </div>
            <div
              onClick={() => window.open("khanzodesejal@gmail.com")}
              className="z-20 cursor-pointer w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110"
            >
              <MdOutlineAlternateEmail className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
