import React from 'react'
import { ButtonFill } from '../ButtonFill'
import { Img1 } from '../Header';
 export const Blog = () => {
  return (
    <section className={` flex gap-4 py-12 items-center md:px-28 px-4     `}>
      <div className='flex-1'>
        <Img1 ></Img1>
      </div>

      <div className='flex-1'>
        <h1 className='md:text-5xl font-semibold md:leading-snug text-3xl'>Lorem ipsum </h1>
        <p className='py-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quaerat quod reprehenderit sint? Similique, assumenda laborum soluta amet reprehenderit possimus repellat perferendis quos, voluptatum unde, rerum harum! Doloremque, aliquid incidunt!
        </p>

        <ButtonFill>Contact Us</ButtonFill>
      </div>
    </section>
  )
}
