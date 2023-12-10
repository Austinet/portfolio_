import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

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

  return (
    <header id="header" className="min-h-[5rem] md:min-h-fit">
      <nav className="bg-primary-dark fixed z-20 md:static w-full top-0 left-0">
        <div className="px-[1rem] py-[1.5rem] lg:px-[3.5rem] flex justify-between items-center">
          <div>
            <h2 className="text-[#62E0D9] hover:text-white font-semibold lg:text-[2rem] text-[1.5rem]">
              <Link to="/">{`<Austinet />`}</Link>
            </h2>
          </div>
          <div
            className={`absolute left-0 z-30 w-screen md:w-fit md:static transition-all duration-300 ease-in-out bg-gray-400 md:bg-primary-dark ${
              toggleNav ? "top-[5rem]" : "top-[-50rem]"
            }`}
          >
            <ul className="flex flex-col md:flex-row gap-[1.2rem] md:gap-[2rem] lg:gap-[2.5rem] p-[1rem]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white hover:text-secondary cursor-pointer font-medium text-[1.1rem] md:text-[1.2rem]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
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
      </nav>
    </header>
  );
};

export default Header;
