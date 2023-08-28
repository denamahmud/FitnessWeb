import { HiMenuAlt3 } from "react-icons/hi"; 
import { Link , animateAsScroll as Scroll} from 'react-scroll'  
import { useState, useEffect } from "react";
import { motion } from "framer-motion";  
import { FaTimes } from "react-icons/fa";
 
function Navigation( ) {
  
    const menu = [
        {id : 1, name : 'Home'},
        {id : 2, name : 'About'},
        {id : 3, name : 'Gallery'},
        {id : 4, name : 'Pricing'},
        {id : 5, name : 'Contact'},
    ]  

    const [isOpen, setIsOpen] = useState(false);  
    const [fixed, setFixed] = useState(false)


    const item = {
        exit : {
            opacity : 0,  
            transition: {
                ease : " easeInOut"
            }
        }
    }
   
    useEffect(() => {
        console.log(window.scrollY)  
    }) 
    function funSetFixed(){
        if(window.scrollY >= 1){

            setFixed(true)
        }else{
            setFixed(false)
        }
    }

    window.addEventListener('scroll', funSetFixed) 

   
    const openMenu = () => {
        setIsOpen(!isOpen) 
    }
  
 
  
  return (
    <div className={fixed ? 'nav fixed' : 'nav'}>
        <div className='custom_conatainer grid grid-cols-6 gap-4 items-center'>

            <div className='text-4xl cursor-pointer text-xl md:text-4xl'>
                <Link to='/' ><span className='text-orange '>Fit</span>ness</Link> 
            </div>
 

            <motion.ul  
                variants={item}
                exit='exit'
                initial={{ opacity: 0, y: -220 }}
                animate={ 
                    isOpen === true ? {opacity: 1} : {y: 0} 
                }
                transition={{ duration: 0.5 }}  
                className='absolute top-52 left-0 z-10 w-full h-screen bg-black flex flex-col justify-center items-center mx-auto'>

                {
                    isOpen && (
                        <div className="absolute right-10 top-10 cursor-pointer" onClick={openMenu} >
                            <FaTimes color='#F15921' size={35}/>
                        </div> 
                    )
                }
                {
                    menu.map( item  => {
                        return(
                            <motion.li
                                animate = {
                                    isOpen === true ? { y : 0, opacity : 1 } :  { y : -1000, opacity : 0 } 
                                } 

                                initial = {
                                    { y : -1000, opacity : 0 }
                                } 
                                transition={{ 
                                    type : 'tween',
                                    stiffness : 10,
                                    duration : 1 
                                }} 
                                className='my-5 ' key={item.id}>
                                    <Link
                                    smooth={true} 
                                    duration={1000} 
                                    to={`section${item.id}`} 
                                    className='text-white hover:text-orange p-2 rounded-lg transition ease-out duration-200 cursor-pointer'>{item.name}</Link>
                            </motion.li>
                        )
                    })
                }
            
                
                <motion.div 
                    animate = {
                        isOpen === true ? { y : 0 } :  { y : -1000 } 
                    }
                    initial = {
                        { y : -1000 }
                    }
                    transition={{ 
                        type : 'tween',
                        stiffness : 10,
                        duration : 1
                    }} 
                    className='animate_div mt-16 text-center w-20 py-2 rounded-xl bg-orange cursor-pointer hover:bg-orangelight transition ease-out duration-200'>
                        Join us
                </motion.div>
            
            </motion.ul>
         
         
      
        <ul className='hidden lg:col-start-2 lg:col-span-4 lg:flex lg:justify-center w-full'>
  
            {
                menu.map((item)=> {

                
                    return(
                        <li> 
                              
                            <Link
                                smooth={true} 
                                duration={1000} 
                                to={`section${item.id}`}  
                                activeClassName="active"
                                className="relative p-2 rounded-lg transition ease-out duration-200 cursor-pointer hover:text-orange"
                            >
                                {item.name}
                            </Link>
                        
                                
                        </li>
                    )
                })
            }  
            
        </ul>
        
        <div className='hidden lg:flex p-2 lg:ml-auto'>
    
            <div className='animate_div text-center w-20 py-2 rounded-xl bg-orange cursor-pointer hover:bg-orangelight transition ease-out duration-200'>
                Join us
            </div>
        </div> 
        

        <div onClick={openMenu} className='lg:hidden cursor-pointer p-2 absolute right-10 ml-auto'>
             <HiMenuAlt3 color='#F15921' size={35}/>
             
            
        </div>
         
        </div>
      
    </div>
  )
}

export default Navigation