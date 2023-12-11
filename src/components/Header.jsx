import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaMoon } from "react-icons/fa";
import {IoSunny} from "react-icons/io5"
import useModeContext from "../hooks/useModeContext";

const navLinks = [
  {
    id: 1,
    title: "About",
    href: "#about",
  },
  {
    id: 2,
    title: "Skill Set",
    href: "#skillset",
  },
  {
    id: 3,
    title: "Projects",
    href: "#portfolio",
  },
  {
    id: 4,
    title: "Blog",
    href: "https://austinet.hashnode.dev",
  },
  {
    id: 5,
    title: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const {mode, setMode} = useModeContext()

  const switchMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <header id="header" className="min-h-[5rem] md:min-h-fit">
      <nav className={`${mode === "dark" ? "shadow-blue bg-transparent backdrop-blur-md" : "bg-[#EAF6F6] shadow-xl"} fixed z-20 md:static w-full top-0 left-0`}>
        <div className="px-[1rem] py-[1.5rem] lg:px-[3.5rem] flex justify-between items-center">
          <div>
            <h2 className={`${mode === "dark" ? "text-[#62E0D9]  hover:text-white" : ""} font-semibold lg:text-[2rem] text-[1.5rem]`}>
              <Link to="/">{`<Austinet />`}</Link>
            </h2>
          </div>
          <div className="flex items-center gap-[1rem]">
             <div
            className={`absolute left-0 z-30 w-screen md:w-fit md:static transition-all duration-300 ease-in-out bg-[#374b68] md:bg-transparent ${
              toggleNav ? "top-[5rem]" : "top-[-50rem]"
            }`}
          >
            <ul className="flex flex-col md:flex-row gap-[1.2rem] md:gap-[2rem] lg:gap-[2.5rem] p-[1rem] md:p-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className=" hover:text-secondary cursor-pointer font-medium text-[1.1rem] md:text-[1.2rem]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mode */}
          <div>
            <button onClick={switchMode} className={`p-[0.4rem] outline-none rounded-full shadow-xl border-white ${mode === "light" ? "bg-primary-light" : "bg-[#374b68]"}`}>
              {
                mode === "light" 
                ? <FaMoon className="text-primary-dark md:text-[1.3rem] text-[1.1rem]" />
                : <IoSunny className="text-white md:text-[1.3rem] text-[1.1rem]" />
              }
            </button>
           </div>
           <div className="md:hidden text-white cursor-pointer">
            {toggleNav ? (
              <AiOutlineClose
                className="text-xl"
                onClick={() => setToggleNav(!toggleNav)}
              />
            ) : (
              <FaBars
                className="text-xl"
                onClick={() => setToggleNav(!toggleNav)}
              />
            )}
          </div>
          </div>
        
        </div>
      </nav>
    </header>
  );
};

export default Header;
