"use client";
// import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import hello from "../../assets/home/hi.png";
import profilePic from "../../assets/home/profile.jpg"; // Replace with correct image path

const Page = () => {
  return (
<main id="home" className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between  px-8 sm:px-6 md:px-16 py-6">
  {/* Left Section - Text */}
  <div className="max-w-xl pt-10 sm:pt-0">
    <p className="text-gray-300 text-lg flex items-center gap-2">
      Hey, there{" "}
      <motion.span
        className="text-2xl"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 20, -10, 20, 0] }}
        transition={{ duration: 1.5, repeat: 2 }}
      >
        <img src={hello} alt="" className="w-10 h-10"/>
      </motion.span>
    </p>

    {/* Name & Role */}
    <h1 className="text-white/60 text-5xl md:text-6xl font-bold leading-tight">
      I&apos;m <span className="text-white ">Sejal Khanzode</span>
      <br />
      a <span className="text-white/60 font-extrabold">Software Developer</span>
    </h1>

    {/* Subtitle Animation */}
    {/* <TypeAnimation
      sequence={[
        "currently focused on building user experiences that drive growth.",
        2000,
        "",
        500,
      ]}
      speed={50}
      repeat={Infinity}
      className="text-gray-300 text-lg md:text-xl tracking-wide mt-3"
    /> */}
  </div>

  {/* Right Section - Image (Hidden on mobile) */}
  <div className="relative lg:mt-10 sm:mt-0 lg:pr-10">
  <img
    src={profilePic}
    alt="sejal's profile"
    className="rounded-full border-4 border-gray-500 shadow-lg rotate-3 w-36 sm:w-36 md:w-48 lg:w-72 h-36 sm:h-36 md:h-48 lg:h-72"
    />
</div>

</main>

  );
};

export default Page;
