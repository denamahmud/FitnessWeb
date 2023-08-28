import React from 'react'

function Title2({ title }) {
  return (
    <>
          <div className='flex items-center justify-center  '>
                    <span className='w-10 sm:w-20 h-1 rounded-3xl bg-orange '></span>
                    <h3 className='text-3xl text-orange mx-8 sm:mx-32 font-extrabold'>{title}</h3>
                    <span className='w-10 sm:w-20 h-1 rounded-3xl bg-orange '></span>
          </div>
         
    </>
  )
}

export default Title2