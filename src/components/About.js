import { motion } from "framer-motion" 

function About( ) {
  return (
    <motion.div
      initial = {{ opacity: 0, y : -250}}
      whileInView={{ opacity : 1, y :0}}
      transition={{ duration: 0.6}} 
      className='custom_conatainer grid grid-cols-1 sm:grid-cols-2 gap-20 py-40 ' id='section2'>
 
 
        <div className=' w-3/5 mx-auto '>
           <img src="/static/1.jpg" className='w-full rounded-3xl	' />
        </div>
        <div>
            <div className='flex items-center'>
                <h3 className='text-3xl text-orange mr-32 font-extrabold'>About us</h3>
                <div className='w-10 h-1 rounded-3xl	bg-orange'></div>
            </div>
            <p className='w-80 text-justify text-[#A6A6A6] leading-10 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae unde vitae hic impedit voluptate labore quam aliquam.</p>
        </div>
    </motion.div>
  )
}

export default About