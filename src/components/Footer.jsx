import React from 'react'
import mail from '../Assets/imgs/mail.png'
import { ButtonFill } from './ButtonFill'
export const Footer = () => {
  return (
    <section className='  pt-20 md:px-24 px-4'>
       
       <div className='text-center pb-9'>
        <h1 className='font-semibold text-2xl md:w-1/2 md:mx-auto leading-normal'>Subscribe to Our Newsletter For Weekly <br /> Artical Update</h1>

        <p className=' md:w-1/2 md:mx-auto pt-5 text-sm text-gray-600 leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil deserunt doloribus impedit quibusdam, perspiciatis ex iste rem autem quia similique </p>
       
       </div>

      <div className='flex flex-wrap justify-center md:w-2/4 my-6 gap-2 items-center md:mx-auto '>
      <div className='flex flex-1  rounded-full  justify-center md:w-2/5  gap-2 md:mx-auto items-center border border-sky-400  my-4 px-5'>
             <img src={mail} alt="" className='h-5'/>
            <input type="email"  className='bg-transparent outline-none  flex-1 text-sm py-3 px-3'/>
        </div>
           <div>
            <ButtonFill>Subscribe</ButtonFill>
           </div>
      </div>
     
    
      
    
    </section>
  )
}
