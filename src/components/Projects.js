import React, { useEffect, useRef, useState } from 'react'
import CrowdFunding from './../resources/Projct ss/Crowdfunding-page.jpg'
import SpaceExploration from './../resources/Projct ss/Destination.jpg'
import timleyStore from './../resources/Projct ss/Products.jpg'
import DoingsImg from './../resources/Projct ss/Todo-Doings.png'
import ProjectElement from './ProjectElement'

const htmlCssPj = [
    {
    img: CrowdFunding,
    title: 'CrowdFunding Page',
    details: 'A funding page dedicated Mastercraft Bamboo Monitor stand to reduce neck and eye strain',
    link: 'https://crowdfunding-timley53.netlify.app',
    GitHub:'https://github.com/Timley53/crowdfunding'
}, 
 {
    img: SpaceExploration,
    title: 'Space Tourism Page',
    details: 'A page ddicated to space tourism and space knowledge',
    link: 'https://space-tourism-timley.netlify.app/home.html',

    GitHub:'https://github.com/Timley53/Space-tourism'
}, 

 {
    img: timleyStore,
    title: 'E-commerce Store ',
    details: 'An E-commerce store (timley) with various products and functionalities',
    link: 'https://timley-store.netlify.app',
    GitHub: 'https://github.com/Timley53/store'
}, 


]



const reactPjDb = [
    {
      img: DoingsImg,
      details: 'Task Management Web App',
      link: ' https://task-management2.vercel.app',
      GitHub: 'https://github.com/Timley53/task-management2' 
    }

]
// tr-left

function Projects() {


  return (
    <div>   


    <div className="w-full ">
    <h3 className='ml-10 text-xl'>HTML & CSS & JAVASCRIPT</h3>


    <div className="w-full border-2 flex flex-col mt-14">

        {htmlCssPj.map((pj,i) =>{

return(
<ProjectElement i={i} {...pj}/>

)
        })}

    </div>

    </div>


    <div className="w-full">
        <ReactProject/>
    </div>
    
    </div>
  )
}

export default Projects



export function ReactProject(){


    return(
        <>
         <h3 className='ml-10 text-2xl mt-10'>React</h3>


<div className="w-full border-2 flex flex-col mt-14">

    {reactPjDb.map((pj,i) =>{




return(

<ProjectElement i={i} {...pj}/>

)
    })}

</div>
        </>
        )
    }
