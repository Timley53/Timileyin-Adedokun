import React, { useEffect, useRef,useState } from 'react'
import { textVariant, fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
import { observe, useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import TiltCard from './TiltCard'
import Timeline from './Timeline'
import Projects from './Projects'



function About({myRef}) {

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
  
console.log(inView);

  

  return () => observer.disconnect()

},[inView, isIntersecting])


  return (
      <div className='bg-[#fcf9fc]' ref={myRef} id='about'>
    
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
        

           
      Hello and welcome to my portfolio website! I'm a passionate web developer with a strong desire to learn and grow in the ever-evolving world of technology.

      My enthusiasm for coding and building websites is unmatched. I've spent countless hours honing my skills and delving into various web development technologies.

      My journey as a self-taught developer has been a thrilling adventure, where I've embraced challenges and sought out opportunities to expand my knowledge. I'm a firm believer in the power of continuous learning and strive to stay up-to-date with the latest trends and best practices in web development.

      Through my projects and personal experiments, I have acquired expertise in HTML, CSS, and JavaScript. I'm also familiar with popular frameworks such as React, the CSS framework Tailwind and have experience working with responsive design principles. 

      One of my strengths lies in my ability to strategically and relentlessly approach challenges, and my knack for problem-solving. I enjoy finding innovative solutions to challenges and always strive to deliver user-friendly and visually appealing websites. I value clean and maintainable code, and I'm meticulous in ensuring that my projects are well-organized and structured
     
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