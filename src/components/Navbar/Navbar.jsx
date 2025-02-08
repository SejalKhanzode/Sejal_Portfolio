import { navLinksdata } from "../../data/NavbarData";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { CiMenuFries, CiMenuBurger } from "react-icons/ci";
import { PiReadCvLogoFill } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed pl-3 pr-3 top-0 left-0 w-full border bg-[#303030]/100 border-b-white  z-100 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-4">
        <div className="absolute top-4 left-4 z-50 lg:hidden">
          {isOpen ? (
            <CiMenuFries onClick={toggleMenu} className="text-white cursor-pointer text-2xl" />
          ) : (
            <CiMenuBurger onClick={toggleMenu} className="text-white cursor-pointer text-2xl" />
          )}
        </div>

        <div className="absolute top-4 right-4 z-50">
  <button
    className="bg-[#BB8DEA] text-white py-2 px-4 rounded-lg text-lg font-bold md:text-1xl mr-3 flex items-center"
    onClick={() => {
      window.open(
        "https://drive.google.com/file/d/1zaAfWjiHAkvjgKptZyPgFMOA3wKkHXNb/view?usp=sharing"
      );
    }}
  >
    <PiReadCvLogoFill className="text-2xl md:hidden" />

    <span className="hidden md:inline-flex">Resume</span>
  </button>
</div>

        <div
          className={`fixed left-0 h-full w-full bg-black bg-opacity-80 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 lg:bg-transparent lg:flex-row lg:h-auto lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-evenly items-center h-[70%] w-full mt-4 gap-8">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="relative text-white font-semibold tracking-[2px] z-30 uppercase pb-1.5 overflow-hidden cursor-pointer myLink"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
