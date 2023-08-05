import React, {useEffect, useRef, useState} from 'react'
import Tilt from  'react-parallax-tilt'
import htmlImg from './../resources/icons8-html-240.png'
import cssImg from './../resources/icons8-css-240.png'
import jsImg from './../resources/icons8-javascript-240.png'

import reactImg from './../resources/icons8-react-native-240.png'

import tailWindImg from './../resources/icons8-tailwind-css-240.png'

import gitImg from './../resources/icons8-git-240.png'

import gitHubImg from './../resources/icons8-github-250.png'

import reduxImg from './../resources/Redux Image.png'


const cardsObj = [
    {
        img: htmlImg,
        title: 'HTML5'
    },
    {
        img: cssImg,
        title: 'CSS3'
    },
    {
        img: jsImg,
        title: 'JavaScript'
    },
    {
        img: reactImg,
        title: 'React'
    },
    {
        img: reduxImg,
        title: 'Redux'
    },
    {
        img: tailWindImg,
        title: 'Tailwind Css'
    },
    {
        img: gitImg,
        title: 'Git'
    },
    {
        img: gitHubImg,
        title: 'GitHub'
    },
]


function TiltCard({cardRef, isIntersecting}) {

  

   

  return (
    <div ref={cardRef} className={`langueges ${isIntersecting ? 'slide-in' : 'slide-out'} w-[80%] mx-auto justify-center flex flex-wrap `} >


        {cardsObj.map((card, i)=>{
            const {img, title} = card

            return(
                <Tilt
                key={i + 1}
                className="track-on-window md:w-[130px] sm:w-[120px]"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.75}
                glarePosition="all"
                trackOnWindow={false}
                reset = {true}
                
              >
                <div className="inner-element h-auto p-5" >
            
                  <img src={img} alt="Html" className='w-[90%] h-[90px] md:w-[80%] md:h-[60px] mx-auto object-contain'/>
                  <div className='text-center'>{title}</div>
                </div>
              </Tilt>   
            )
        })}
    

    </div>
  )
}

export default TiltCard