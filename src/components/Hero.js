import React from 'react'
import image from '../resources/t2.jpg'

function Hero() {
  return (
    <section className='pt-24 sm:pt-10 sm:w-[90%] w-[85%] mx-auto flex sm:flex-col md:flex-col'>

<div className="flex md:pt-11 pt-32 w-[50%] md:w-full">

 <div className="flex self-start flex-col  justify-center items-center">
 <div className="w-8 h-8 rounded-full bg-[#000]" />
<div className='w-2 sm:h-90 h-60 violet-gradient'/>     
   </div>
<div className="flex flex-col ml-7 sm:w-full">

   <h1 className='text-4xl  font-bold
   '>
    Hi, I'm Timileyin Muhammed
   </h1>

   <p className='w-[80%]  sm:w-full mt-7 text-[1.2rem] p-2'>
   I am a frontend web developer, <br className='sm:block hidden' /> i build user-friendly web applications and user interfaces. 
   </p>

    <a href='#about' className='p-2  self-start px-5 mt-[5rem] sm:mt-5 rounded text-white text-lg bg-sky-500 hover:bg-sky-700 hover:scale-105 transition duration-300'>
        Learn more
    </a>
       </div>


</div>
       <div className="w-[50%] flex justify-center items-center h-[100%] md:hidden">

            <img src={image} alt="Tim's" className='w-[70%] -mt-48  rounded-full'  />

       </div>
    </section>
  )
}

export default Hero