import React from 'react'
import {Navbar } from './Navbar'
import Hero from '../Assets/imgs/Hero.png'
import img1_1 from '../Assets/imgs/img1_1.jpg'
import { ButtonFill ,ButtonVideo } from './ButtonFill'
import Icon1  from '../Assets/imgs/icon-1.png'
import Icon2 from '../Assets/imgs/icon-2.png'
import Icon3  from '../Assets/imgs/icon-3.png'

export const Header = () => {
    const Info =[
        {
            icon: Icon1,
            title:"Secrate Locations",
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque quaerat mollitia odio fuga illo eos possimus deserunt nam, voluptatibus, a ex? Nulla dolorum nobis iusto repellendus, veritatis praesentium dolorem?'
        },
        {
            icon: Icon2,
            title:"Secrate Locations",
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque quaerat mollitia odio fuga illo eos possimus deserunt nam, voluptatibus, a ex? Nulla dolorum nobis iusto repellendus, veritatis praesentium dolorem?'
        },
        {
            icon: Icon3,
            title:"Secrate Locations",
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque quaerat mollitia odio fuga illo eos possimus deserunt nam, voluptatibus, a ex? Nulla dolorum nobis iusto repellendus, veritatis praesentium dolorem?'
        },
    ]
  return (
    <section className='bg-Hero bg-cover bg-center  py-4 md:px-24 px-4'>
        <Navbar/>
        <div className='flex md:flex-row flex-col gap-5 pt-20'>
            <div className='flex-1'>
             <h1 className='md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight leading-snug'>Be prepared for the mountains and beyond.</h1>
             <p className='text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed'>
                Are you looking for amezing hiking travel?  Don't worry ! we got it for you!
             </p>
             <br />
             <div className='flex md:gap-4 gap-2 flex-wrap'>
                <ButtonFill>Contact us</ButtonFill>
                <ButtonVideo>Watch Video</ButtonVideo>
             </div>
            </div>
            <div className='flex-1  flex justify-center'>
                <img src={Hero} alt="hero"  className='h-2/3'/> 
            </div>
        </div>
        <div className='bg-white flex md:flex-row flex-col gap-10 mt-5'>
               {
                Info.map((info , i)=>(   
                    <div key={i} className="">
                        <img src={info.icon} alt="" className='h-16' />
                        <h1>{info.title}</h1>
                        <p>{info.des}</p>
                        <button className="text-rose-600 font-medium text-sm my-1">Read More</button>
                    </div>

                ))
               }

            </div>
    </section>

  )
}

export function Img1() {
     return(  <img src={img1_1} alt="hero" className ={`md:h-[550px] h-full object-cover`} /> )
}