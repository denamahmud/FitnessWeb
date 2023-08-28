import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md' 
import Title2 from './Title2'
import { motion } from 'framer-motion'


import { Map, Marker } from "pigeon-maps"
import { useState } from 'react' 

function Getintouh() {

   const [center, setCenter] = useState([33.312805, 44.361488])
   const [zoom, setZoom] = useState(11)
  return (
    <div className='my-40' id='section5'>
       

      <Title2 title='Get in touch' />
    
      <div className='grid grid-cols-1 sm:grid-cols-7 mt-20'>
        <motion.div 
         initial = {{ opacity: 0, x : -50 }}
         whileInView={{ opacity : 1, x :0 }}
         transition={{ duration: 0.6 }} 
        className=' col-span-3 h-96 sm:h-full'>
            <Map  
                  center={center} 
                  zoom={zoom} 
                  onBoundsChanged={({ center, zoom }) => { 
                  setCenter(center) 
                  setZoom(zoom) 
                  }} 
               />
        </motion.div>
        <div className='w-1 h-full mx-auto bg-orange col-span-1 '>
        
        </div>
        <motion.div 
        initial = {{ opacity: 0, x : 50 }}
        whileInView={{ opacity : 1, x :0 }}
        transition={{ duration: 0.6 }} 
        className=' mx-auto sm:w-full col-span-3  w-80'>
            <div className='flex mt-16'>
               <div className='bg-orange w-10 h-10 flex justify-center items-center rounded-lg '>
                  <FaPhone color='#fff' size={25} />
               </div>
               <div className='flex flex-col ml-5'>
                  <h5 className='text-orange font-extrabold text-xl'>Phone</h5>
                  <p className='text-grey'>+61 3 8376 6284</p>
               </div>
            </div> 
            <div className='flex my-16'>
               <div className='bg-orange w-10 h-10 flex justify-center items-center rounded-lg '>
                  <MdEmail color='#fff' size={25}/>
               </div>
               <div className='flex flex-col ml-5'>
                  <h5 className='text-orange font-extrabold text-xl'>Email</h5>
                  <p className='text-grey'>example@example.com</p>
               </div>
            </div>
            <div className='flex my-16'>
               <div className='bg-orange w-10 h-10 flex justify-center items-center rounded-lg '>
                  <FaMapMarkerAlt color='#fff' size={25}/>
               </div> 
               <div className='flex flex-col ml-5'>
                  <h5 className='text-orange font-extrabold text-xl'>Location</h5>
                  <p className='text-grey'>121 King Street, Melbourne Victoria 3000</p>
               </div> 
            </div>
        </motion.div>
      </div>  
    </div>
  )
}

export default Getintouh