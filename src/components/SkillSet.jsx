import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { GiPencilBrush } from "react-icons/gi";

const skillsList = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 className="text-secondary text-[4rem]" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="text-secondary text-[4rem]" />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <SiJavascript className="text-secondary text-[4rem]" />,
  },
  {
    id: 4,
    name: "Sass",
    icon: <FaSass className="text-secondary text-[4rem]" />,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-secondary text-[4rem]" />,
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: <BsBootstrapFill className="text-secondary text-[4rem]" />,
  },
  {
    id: 7,
    name: "ReactJs",
    icon: <FaReact className="text-secondary text-[4rem]" />,
  },
  {
    id: 8,
    name: "Git",
    icon: <FaGitAlt className="text-secondary text-[4rem]" />,
  },
  {
    id: 9,
    name: "Github",
    icon: <FaGithub className="text-secondary text-[4rem]" />,
  },
  {
    id: 10,
    name: "Graphic Design",
    icon: <GiPencilBrush className="text-secondary text-[4rem]" />,
  },
];

const SkillSet = () => {
  return (
    <section id="skillset">
      <div className="max-w-[1250px] mx-auto px-[1rem] py-[1.5rem] lg:py-[4rem] text-center mt-[3rem]">
        <div className="text-white">
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold leading-normal mb-[2rem] md:mb-[3.5rem]">
            TECHNICAL SKILL SET
          </h2>
          <h3 className="text-left text-[1.1rem] lg:text-[1.5rem] font-medium leading-normal my-[2rem]">
            I am skilled in:
          </h3>
        </div>

        <div>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-[1.5rem] lg:gap-[2.5rem] justify-between">
            {skillsList.map((skill) => (
              <li key={skill.id} className="">
                <div className="bg-light-dark p-[1rem] rounded-lg shadow-card flex flex-col gap-2 items-center justify-center">
                  {skill.icon}
                  <h3 className="sm:text-[1.1rem] text-secondary font-semibold leading-normal">
                    {skill.name}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
