import React, { useRef } from 'react'
import { useState,useEffect } from 'react'
import { HiMenuAlt1, } from "react-icons/hi"
import { RxCross1 } from "react-icons/rx"
import Hero from './Hero'
import { useInView } from 'react-intersection-observer';
import logo from '../resources/logo.png'



const links = ['Home','About', 'Contact']

function Header({isVisible}) {
const [open, setOpen] = useState(false)




  return (
    <header className='h-screen flex flex-col w-full  bg-[#e0e7ee]'>


      <nav className={`w-full ${isVisible ? 'fixed sm:fixed top-0 h-auto bg-sky-200 shadow-xl' : 'static sm:static'}  flex px-20 sm:px-5 p-2 py-5 items-center justify-between z-10`}>
        <div className='w-12  flex justify-center items-center  '>
    <img src={logo} alt=""  />
    <span className='leading-4 ml-2 text-slate-950 md:hidden'>
      Timileyin <br />
      Adedokun
    </span>

        </div>

        <button
        onClick={()=>setOpen(!open)}
        className="sm:block text-center hidden text-2xl p-2">

         {!open &&  <HiMenuAlt1/> || open && <RxCross1/>}

        </button>

        <ul className={`flex ${open ? 'sm:block  ' : 'sm:hidden '}  sm:absolute  right-10 top-12 sm:p-1 sm:bg-gradient-to-tr from-gray-400 to-gray-300 sm:rounded-md `}>
          {links.map((link, i) =>{
            return(
              <li key={i} className='sm:my-4 '>
                <a href={`#${link.toLowerCase()}`}
                className='mx-3 p-2 px-3 hover:text-sky-500 hover:text-[1.05rem] transition-all 
               sm:text-lg
                '
                >{link}</a>
              </li>
            )
          })}
        </ul>
      </nav>

      <Hero/>

    </header>
  )
}

export default Header