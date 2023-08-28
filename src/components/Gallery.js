import ModalImage from "react-modal-image";
import { motion } from 'framer-motion'

function Gallery( ) {
  return (
    <div className='bg-orange py-10' id='section3'>

        <div className='flex items-center px-20 my-10'>
            <h3 className='text-3xl text-white mr-32 font-extrabold'>Gallery</h3>
            <div className='w-10 h-1 rounded-3xl bg-white'></div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
            <motion.div
                initial = {{ opacity: 0, y : -20}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                className='w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/11.jpg"}
                  medium={"/static/11.jpg"}
                  large={"/static/11.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover'
                />
            </motion.div> 
              
            <motion.div            
                initial = {{ opacity: 0, y : -15}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                 className='  w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/22.jpg"}
                  medium={"/static/22.jpg"}
                  large={"/static/22.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover'
                />
            </motion.div> 
              
            <motion.div            
                initial = {{ opacity: 0, y : -10}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                 className='  w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/33.jpg"}
                  medium={"/static/33.jpg"}
                  large={"/static/33.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover'
                />
            </motion.div> 
              
            <motion.div            
                initial = {{ opacity: 0, y : -20}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                 className='  w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/44.jpg"}
                  medium={"/static/44.jpg"}
                  large={"/static/44.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover	'
                />
            </motion.div> 
              
            <motion.div            
                initial = {{ opacity: 0, y : -15}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                 className='  w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/55.jpg"}
                  medium={"/static/55.jpg"}
                  large={"/static/55.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover	'
                />
            </motion.div> 
              
            <motion.div            
                initial = {{ opacity: 0, y : -10}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                 className='  w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/77.jpg"}
                  medium={"/static/77.jpg"}
                  large={"/static/77.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover'
                />
            </motion.div> 
              
            <motion.div            
                initial = {{ opacity: 0, y : -20}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                 className='  w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/99.jpg"}
                  medium={"/static/99.jpg"}
                  large={"/static/99.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover'
                />
            </motion.div> 
              
            <motion.div            
                initial = {{ opacity: 0, y : -15}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                 className='  w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/43.jpg"}
                  medium={"/static/43.jpg"}
                  large={"/static/43.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover	'
                />
            </motion.div> 
              
            <motion.div            
                initial = {{ opacity: 0, y : -10}}
                whileInView={{ opacity : 1, y :0}}
                transition={{ duration: 0.6}} 
                className='w-4/5 mx-auto mb-8'>
                <ModalImage
                  small={"/static/71.jpg"}
                  medium={"/static/71.jpg"}
                  large={"/static/71.jpg"} 
                  className='w-full rounded-3xl h-64 object-cover	'
                />
            </motion.div> 

        </div>
 
    </div>
  )
}

export default Gallery