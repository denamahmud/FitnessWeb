import {BiLogoFacebook} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'


function TopHeader() {

  return (
    <div className=' flex justify-between items-center py-5 text-orange custom_conatainer'>
     
        <p className='text-sm sm:text-lg '>+763 - 993 - 777</p>
        <div className='flex justify-between  '>
            <div className=' cursor-pointer '>
               <BsYoutube size={25}/>
            </div>
           <div className=' cursor-pointer mx-3 '>
               <AiFillInstagram size={25}/>
           </div>
            <div className=' cursor-pointer '>
               <BiLogoFacebook size={25}/>
            </div>
        </div>
    </div>
  )
}

export default TopHeader