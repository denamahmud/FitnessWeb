import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-orange mt-10 py-10'>
        <div className='flex sm:justify-between items-center text-center sm:flex-row flex-col  custom_conatainer text-white'>
            <div className='w-20 flex justify-between'>
                <FaYoutube size={20} className='my-4 cursor-pointer'/>
                <FaInstagram size={20} className='my-4 cursor-pointer'/>
                <FaFacebookF size={20} className='my-4 cursor-pointer'/>
            </div>
            <div >
                Copyright © All Right Reserved
            </div>

        </div>
       
    </div>
  )
}

export default Footer