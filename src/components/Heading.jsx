import PropTypes from "prop-types";

const Heading = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-[1rem] md:gap-[1.5rem] md:mb-[3.5rem] mb-[2rem]" data-aos="fade-up" data-aos-delay="100">
      <span className="border w-[65px] md:w-[200px]"></span>
      <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold leading-normal">
        {title}
      </h2>
      <span className="border w-[65px] md:w-[200px]"></span>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
};
export default Heading;
