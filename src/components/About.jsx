import profilePicture from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaPhoneAlt ,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      {/* about-container */}
      <div className="px-[1rem] py-[1.5rem] lg:px-[3.5rem] lg:py-[4rem] text-center text-white">
        {/* about image */}
        <div>
          <img
            src={profilePicture}
            alt="A picture of Udhe Austine Ogaga"
            className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] mx-auto rounded-full border-[5px] border-secondary hover:border-white"
          />
        </div>

        {/* about text */}
        <div className="max-w-[700px] mx-auto mt-[1.5rem] md:mt-[1.2rem]">
          <h1 className="text-[1.5rem] md:text-[2rem]  leading-normal">
            <span>Hi, I&apos;m</span> <span className="font-semibold">Udhe Austine Ogaga</span>
          </h1>
          <h2 className="text-[1.3rem] md:text-[1.5rem] font-medium leading-normal md:mb-[1.5rem] mb-[1.2rem]">
            Frontend Web Developer
          </h2>
          <p className="text-base md:text-[1.25rem] leading-normal">
            I design and develop aesthetically pleasing, accessible,
            interactive, search engine optimized and responsive webpages,
            creating seamless web experiences for users and connecting
            businesses to customers. I love learning new things and adapting to
            new technologies, and improvements in the Tech space.
          </p>
          <div className="flex justify-center gap-[1.5rem] lg:gap-[2rem] mt-[2rem]">
            <Link
              to={""}
              className="flex items-center gap-[0.5rem] justify-center w-[10rem] md:w-[11.5rem] h-[3.5rem] lg:h-[4rem] bg-secondary font-semibold md:text-[1.25rem] text-[1.1rem] text-primary-dark rounded-lg hover:bg-primary-dark hover:text-secondary hover:border-2 hover:border-secondary transition-all duration-300 ease-in-out"
            >
              <FaEye /> <span>View CV</span>
            </Link>
            <a
              href="#contact"
              className="flex items-center gap-[0.5rem] justify-center w-[10rem] md:w-[11.5rem] h-[3.5rem] lg:h-[4rem] border-2 border-secondary font-semibold md:text-[1.25rem] text-[1.1rem] leading-normal text-secondary rounded-lg hover:bg-secondary hover:text-primary-dark transition-all duration-300 ease-in-out"
            >
              <FaPhoneAlt /> <span>Contact me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
