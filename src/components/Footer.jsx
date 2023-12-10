import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaCaretSquareUp } from 'react-icons/fa'

const Footer = () => {
    return(
        <footer>
         <div className="text-white text-center relative bg-very-dark pt-[8rem] pb-[2rem] px-[1rem]">
          {/* Socials */}
          <div>
            <ul className='flex justify-center items-center gap-[1.2rem]'>
              <li>
              <a href="https://github.com/Austinet"> <FaGithub className={`${iconStyle}`}/> </a>  
              </li>
              <li>
              <a href="https://linkedin.com/in/udhe-austine-ogaga"> <FaLinkedin  className={`${iconStyle}`}/> </a>   
              </li>
              <li>
              <a href="https://facebook.com/udhe.austine"> <FaFacebookF className={`${iconStyle}`}/> </a>   
              </li>
              <li>
              <a href="https://twitter.com/austineudhe"> <FaTwitter className={`${iconStyle}`}/> </a>    
              </li>
            </ul>
          </div>
          <p className="my-[1.2rem]"> Copyright &copy; 2023 All rights reserved, Udhe Austine Ogaga</p>
          <div className='fixed z-20 right-[2rem] bottom-[1.5rem] bg-[#000000d0] rounded-full'>
          <a href="#header"> <FaCaretSquareUp className={`${iconStyle}`}/></a>

          </div>
         </div>
        </footer>
    )
}

const iconStyle = "text-white border rounded-full text-[2.5rem] p-[0.4rem] inline-block hover:text-secondary  hover:border-secondary transition-all duration-300 ease-in-out"

export default Footer