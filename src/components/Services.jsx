import { FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

const servicesList = [
  {
    title: "Frontend Web Development",
    description: `I create visually appealing user interfaces with plain HTML, CSS, and JavaScript, as well as using
    libraries and frameworks such as ReactJs and Tailwind CSS.`,
    icon: <FaLaptopCode className="text-[4rem] inline-block text-secondary" />,
  },
  {
    title: "Tutoring and Mentoring",
    description: `I tutor and mentor newbies in Tech, with classes and mentorship based on Web Development in particular,
    and Computer Science in general.`,
    icon: <FaChalkboardTeacher className="text-[4rem] inline-block text-secondary" />,
  },
  {
    title: "Technical Writing",
    description: `I write articles based on Web Development in particular,
    and Computer Science in general.`,
    icon: <FaPenToSquare className="text-[4rem] inline-block text-secondary" />,
  },
];
const Services = () => {
  return (
    <section id="services" className=" bg-very-dark">
      <div className="max-w-[1250px] mx-auto px-[1rem] py-[1.5rem] lg:py-[5rem] text-center text-white">
        <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold leading-normal mb-[2rem] md:mb-[3.5rem]">
          SERVICES
        </h2>
        <h3 className="text-left text-[1.1rem] lg:text-[1.5rem] font-medium leading-normal my-[2rem]">
          I offer services such as:
        </h3>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[1.5rem] lg:mb-[2rem]">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="w-[340px] h-[320px] px-[1rem] py-[1.5rem] border border-secondary rounded-lg"
            >
              {service.icon}
              <h4 className="text-[1.25rem] font-semibold leading-normal my-[1rem]">
                {service.title}
              </h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
