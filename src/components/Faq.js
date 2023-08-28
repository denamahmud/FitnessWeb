 
import { useEffect,  useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Title2 from "./Title2"; 
import { AnimatePresence, motion } from "framer-motion";   

function Faq() {
 

  const [selected, setSelected] = useState(null)
 
  const toggle = (i) => {
    if(selected == i){
      return setSelected(null)
    }

    setSelected(i)
  }
  
return (
    <motion.div 
    
    initial = {{ opacity: 0, y : -50 }}
    whileInView={{ opacity : 1, y :0 }}
    transition={{ duration: 0.6 }} 

    className='  custom_conatainer'>

      <Title2 title='FAQ' />
 
        {
           dataItems.map((item, i) => {
                return(
                 <>
                 
                 <div
               
                 className='item p-2 w-full border-orange border-2 border-solid mx-auto my-5 rounded-lg'>
                      <div className='flex justify-between items-center py-2'>
                          <div className='title'>
                              <h3 className=' text-orange '>{item.question}</h3>
                          </div>
                          <span className='cursor-pointer p-5' onClick={() => toggle(i)} >{selected == i ? <BsChevronUp  size={30} color='#F15921'/> : <BsChevronDown size={30} color='#F15921'/>}</span>
                      </div>
                      <div className={selected == i ? 'content show' : 'content'}>
                       {
                         item.answer
                       }
                      </ div>
                  </div>
                 
                 </>
                )
              })
      }
 
 
   </motion.div>
      );
}; 


export default Faq;
 

const dataItems  =  [
    {
      question : "Question 1",
      answer : "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      question : "Question 2",
      answer : "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      question : "Question 3",
      answer : "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      question : "Question 4",
      answer : "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    }
]