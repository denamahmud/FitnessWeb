import { useEffect, useState } from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai' 
import { motion } from 'framer-motion';

function Header() {
    

  const text1 = 'FITNESS AND GYM CENTER'
  const text2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae unde vitae hic impedit voluptate labore quam aliquam.'


  function scrollDown() {
    window.scrollBy(0, 1700);
   
  }

  const variants1 = {
    hidden : {
      opacity : 0
    },
    visible : {
      opacity : 1,
      transition : {
        staggerChildren : 0.05
      }
    }
  }

  const textVariant1 = {
    hidden : {
      opacity : 0
    },
    visible : {
      opacity : 1
    }
  }

  const variants2 = {
    hidden : {
      opacity : 0
    },
    visible : {
      opacity : 1,
      transition : {
        staggerChildren : 0.05
      }
    }
  }

  const textVariant2 = {
    hidden : {
      opacity : 0
    },
    visible : {
      opacity : 1
    }
  }
  return (
    <div className='image mt-10 sm:mt-20' id='section1'>
        <div className='bg-gradient-to-r from-[#FF4500] to-transparent h-full'>
          <div className='custom_conatainer text-white py-24'>
              <motion.h2 
              variants={variants1}
               initial='hidden'
               animate='visible'
              className='font-extrabold capitalize sm:text-2xl text-lg text-center sm:text-left'>
                    {
                      text1.split("").map((item, index) => (
                        <motion.span variants={textVariant1}>
                              {item}
                        </motion.span>
                      ))
                    }

              </motion.h2>
              <motion.p 
              variants={variants2}
              initial='hidden'
              animate='visible'
              className='sm:w-1/2 w-60 mx-auto text-justify sm:my-40 my-20'>
                  {
                      text2.split("").map((item, index) => (
                        <motion.span variants={textVariant2}>
                              {item}
                        </motion.span>
                      ))
                    }  
              </motion.p>
              <div className='w-20 ml-auto '>
                  <div
                  onClick={scrollDown} 
                  className='text-center bg-orange p-2 rounded-full cursor-pointer hover:bg-orangelight transition ease-out duration-200 '>
                     <div className='animate-bounce '
                      >
                       <AiOutlineArrowDown/>
                     </div>
                  </div>
              </div> 
          </div>
           
        </div>
    </div>
  )
}

export default Header