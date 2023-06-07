import React, { useEffect, useRef,useState } from 'react'
import { textVariant, fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
import { observe, useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import TiltCard from './TiltCard'
import Timeline from './Timeline'
import Projects from './Projects'



function About({navRef}) {

const {ref, inView} = useInView()
const animation = useAnimation()


const [isIntersecting, setIsIntersecting] = useState(false)


const cardRef = useRef()

useEffect(()=>{
const observer = new IntersectionObserver(([entry])=>{
    // console.log(entry.isIntersecting);

    setIsIntersecting(entry.isIntersecting)
  }, {
    rootMargin: '-20px'
  })
  
  observer.observe(cardRef.current)
  

  

  return () => observer.disconnect()

},[inView, isIntersecting])


  return (
      <div className='bg-[#fcf9fc]' ref={navRef} id='about'>
    
         <motion.div ref={ref}
          initial={{opacity: 0}}
          
          whileInView={{opacity: 1}}
          transition={{
              duration: 1,
              delay: 0,

          }}
      
      viewport={{once: false}}

            className='w-full p-3 pt-10 '
           
        >
      <p className='text-xl   about-gradient w-[80%] mx-auto text-left  '>
        Introduction
      </p>
      <h2 className='text-4xl about-gradient font-extrabold  w-[80%] text-left mt-2 mx-auto  '>
        Overview
      </h2>


          <div className="w-full">

           <p className='w-[80%] text-base sm:text-left mx-auto mt-12 text-left
           '>
        

           
        Welcome to my portfolio website! I'm a passionate, self-taught web developer, constantly eager to learn and adapt to the dynamic world of technology. With a strong coding background and an unwavering dedication to building websites, I've acquired expertise in HTML, CSS, JavaScript, and frameworks like React and Tailwind. I prioritize continuous learning, staying updated with the latest trends and best practices in web development. My approach to problem-solving is strategic and persistent, and I take pride in delivering visually appealing and user-friendly websites. Clean and maintainable code is a priority for me, ensuring that my projects are well-organized and structured.
     
           </p>

          </div>

            <div className="language-cards mt-24">

              <h1 className='mx-auto text-center w-full my-8'>Technologies</h1>

           <TiltCard cardRef={cardRef} isIntersecting={isIntersecting}/>
            </div>


<div className="w-full mt-16 ">
          <h1 className='mx-auto text-center'>Experience</h1>

<Timeline/>
</div>



<div className="projects w-full mt-12">
  <h1 className='text-center'>Projects</h1>

  <Projects/>

</div>





    </motion.div>


  


    <div className="w-full bg-green-200">

    </div>



    </div>
  )
}

export default About