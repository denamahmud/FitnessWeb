import { FaCheck, FaTimes } from "react-icons/fa";
import Title2 from "./Title2";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <div className='pt-32 ' id='section4'>
         
      
          <Title2 title='Pricing'/>
          <p className='text-[#A6A6A6] text-center my-10'>Choose our plans</p>
          
          <div className="md:p-20">
             <div className='grid grid-cols-1 sm:grid-cols-3  custom_conatainer	'>


            <motion.div 
                    initial = {{ opacity: 0, x : -50 }}
                    whileInView={{ opacity : 1, x :0 }}
                    transition={{ duration: 0.6 }} 
                    className='text-[#A6A6A6] mx-5 rounded-lg border-solid border-2 border-orange p-10  sm:my-10'>
                <h3 className="text-center text-orange text-2xl font-extrabold">
                    MONTHLY
                </h3>
                <p className="my-5 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
                <div >
                    <div className="flex my-5">
                        <FaCheck color="#F15921"/>
                        <p className="ml-5">Instructor</p>
                    </div>
                    <div className="flex my-5">
                        <FaCheck color="#F15921"/>
                        <p className="ml-5">Free Drink</p>
                    </div>
                    <div className="flex my-5">
                        <FaTimes color="#A6A6A6"/>
                        <p className="ml-5">Get Supplement</p>
                    </div>
                    <div className="flex my-5">
                        <FaTimes color="#A6A6A6"/>
                        <p className="ml-5">Free Support</p>
                    </div>
                    

                </div>


                <div className="flex flex-col  ">
                    <p className="text-orange text-2xl font-extrabold">25$</p>
            
                    <div className=' w-1/2 mt-5'>
                        <div className='text-center text-white py-2 rounded-xl bg-orange cursor-pointer'>
                            Join us
                        </div>
                    </div>
                </div>

            </motion.div> 

           <motion.div
                initial = {{ opacity: 0, y : 50 }}
                whileInView={{ opacity : 1, y :0 }}
                transition={{ duration: 0.6 }} 
                className='bg-orange  scale-[1.1] mx-5 my-10 rounded-lg border-solid border-2 border-orange p-10 sm:my-0'>
                    <h3 className="text-center text-white text-2xl font-extrabold">
                        MONTHLY
                    </h3>
                    <p className="my-5 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                    <div>
                        <div className="flex my-5">
                            <FaCheck color="#fff"/>
                            <p className="ml-5">Instructor</p>
                        </div>
                        <div className="flex my-5">
                            <FaCheck color="#fff"/>
                            <p className="ml-5">Free Drink</p>
                        </div>
                        <div className="flex my-5">
                            <FaTimes color="#A6A6A6"/>
                            <p className="ml-5">Get Supplement</p>
                        </div>
                        <div className="flex my-5">
                            <FaTimes color="#A6A6A6"/>
                            <p className="ml-5">Free Support</p>
                        </div>
                        

                    </div>


                    <div className="flex flex-col ">
                        <p className="text-white text-2xl font-extrabold">25$</p>
                
                        <div className=' w-1/2 mt-5'>
                            <div className='text-center text-orange py-2 rounded-xl bg-white cursor-pointer'>
                                Join us
                            </div>
                        </div>
                   </div>

            </motion.div > 


            <motion.div
                initial = {{ opacity: 0, x : 50 }}
                whileInView={{ opacity : 1, x :0 }}
                transition={{ duration: 0.6 }} 
                className='text-[#A6A6A6] mx-5 rounded-lg border-solid border-2  border-orange p-10  sm:my-10'>
                    <h3 className="text-center text-orange text-2xl font-extrabold">
                        MONTHLY
                    </h3>
                    <p className="my-5 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                    <div>
                        <div className="flex my-5">
                            <FaCheck color="#F15921"/>
                            <p className="ml-5">Instructor</p>
                        </div>
                        <div className="flex my-5">
                            <FaCheck color="#F15921"/>
                            <p className="ml-5">Free Drink</p>
                        </div>
                        <div className="flex my-5">
                            <FaTimes color="#A6A6A6"/>
                            <p className="ml-5">Get Supplement</p>
                        </div>
                        <div className="flex my-5">
                            <FaTimes color="#A6A6A6"/>
                            <p className="ml-5">Free Support</p>
                        </div>
                        

                    </div>


                    <div className="flex flex-col ">
                        <p className="text-orange text-2xl font-extrabold">25$</p>
                
                        <div className=' w-1/2 mt-5'>
                            <div className='text-center text-white py-2 rounded-xl bg-orange cursor-pointer'>
                                Join us
                            </div>
                        </div>
                   </div>

            </motion.div> 
               

             </div>
           </div>
    </div>
  )
}

export default Pricing