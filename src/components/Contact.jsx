import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact">
      <div className="relative max-w-[700px] mx-auto px-[1rem] py-[1.5rem] lg:pt-[4rem] pb-[9rem] text-white">
          <h2 className="text-[1.5rem] lg:text-[2rem] text-center font-semibold leading-normal mb-[2rem] md:mb-[3.5rem]">CONTACT</h2>
        <div>
          <div className="form">
           <form action="mailto:austinetsplendour@gmail.com" method="POST" encType="text/plain">
              <div className="sub-form">
                 <div>
                  <label htmlFor="name" className='font-semibold text-[1.1rem] mb-[0.5rem] block'>Name:</label>
                  <input type="text" name="name" id="name" placeholder="Please Enter Your Name" required className='w-full h-[3rem] px-[1rem] rounded-lg text-lg text-very-dark font-medium mb-[1rem] md:mb-[1.5rem]'/>
                 </div>
                 <div>
                   <label htmlFor="email" className='font-semibold text-[1.1rem] mb-[0.5rem] block'>Email:</label>
                   <input type="email" name="email" id="email" placeholder="Enter Your Email Address" required className='w-full h-[3rem] px-[1rem] rounded-lg text-lg text-very-dark font-medium mb-[1rem] md:mb-[1.5rem]' />
                 </div>
               </div>
               <label htmlFor="message" className='font-semibold text-[1.1rem] mb-[0.5rem] block'>Message:</label>
               <textarea name="message" id="message" placeholder="Enter Your Message" required className='w-full h-[5rem] px-[1rem] py-[0.5rem] rounded-lg text-lg text-very-dark font-medium mb-[1rem] md:mb-[1.5rem]'></textarea>
               <button type="submit" className="flex items-center gap-[0.8rem] justify-center w-[10rem] h-[3.5rem] bg-secondary font-semibold md:text-[1.25rem] text-[1.1rem] text-primary-dark rounded-lg hover:bg-primary-dark hover:text-secondary hover:border-2 hover:border-secondary transition-all duration-300 ease-in-out"><FaEnvelope /> <span>SEND</span></button>
            </form>
          </div>
          <div className="absolute -bottom-[5rem] left-0 z-20 w-full flex justify-center items-center">
            <ul className='bg-light-dark rounded-[0.5rem] shadow-card max-w-[420px] md:p-[2rem] p-[1.5rem]'>
                <li className='flex items-center gap-[1.5rem] mb-[1rem] font-medium md:text-[1.2rem]'><FaPhoneAlt /> <span>08142211941</span></li>
                <li className='flex items-center gap-[1.5rem] mb-[1rem] font-medium md:text-[1.2rem]'><FaEnvelope /> <span>austinetsplendour@gmail.com</span></li>
                <li className='flex items-center gap-[1.5rem] font-medium md:text-[1.2rem]'><FaMapMarkerAlt /> <span>Port Harcourt, Nigeria</span></li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Contact