import React, {useRef, useState, useEffect} from 'react'


function ProjectElement( {img, title, details, link, GitHub, i}) {

    const myRe = useRef()
    const [show, setIsshow] = useState(false)

    useEffect(()=>{

const observer = new IntersectionObserver(([entry])=>{
    setIsshow(entry.isIntersecting)
   
    
    

    
    
},  {
    rootMargin: '-40px'
  })

observer.observe(myRe.current)

return ()=> observer.disconnect()

    }, [show])

 
return(

    <div  key={title} className={`card ${ show ? 'opacity-100  sm:opacity-100' : 'opacity-0 sm:opacity-0' } flex sm:flex-col bg-slate-400 w-[900px] md:w-[500px] sm:w-[80%] hover:scale-105 rounded-lg m-4 transition duration-[1.5s] hover:rounded-xl ${i % 2 === 0? 'self-end': 'self-start'} sm:h-[420px]`}>




<img ref={myRe} src={img} alt={title} className='w-[50%] object-contain sm:object-cover sm:w-full sm:m-0 sm:h-[50%] rounded-xl m-2'/>

<div className="desription  py-2  m-2">
    <h1>{title}</h1>
    <p>{details}</p>

<div className="links mt-10">


    <a href={link} target='_blank' className='bg-slate-200 p-1 px-2 rounded-xl text-sm hover:underline mx-2' > Live Website</a>

    <a href={GitHub} target='_blank' className='bg-slate-200 p-1 px-2 rounded-xl text-sm hover:underline' > GitHub Repo</a>

</div>

</div>
    </div>

)

}

export default ProjectElement