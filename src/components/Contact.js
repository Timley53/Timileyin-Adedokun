import React from 'react'
import {HiPhoneIncoming, } from 'react-icons/hi'
import {AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineMail, AiOutlineGithub} from 'react-icons/ai'




function Contact() {
  return (
    <div className='bg-slate-200 pt-20 w-full'  id='contact'>
         <h1 className='text-center text-3xl'>Contact me</h1>

         <div className="text-center w-[60%] sm:w-[80%] mx-auto">
         I'm open to feedback and actively seek opportunities to learn from more experienced professionals in the field.if you have any inquiries or if you'd like to collaborate on a project.
         </div>

    <div className="flex mx-auto w-[80%] items-center justify-center m-3">

        <a href='tel:+2349056499020' target='_blank' className='text-2xl m-3 hover:scale-110'>
            <HiPhoneIncoming/>
        </a>
        <a href="mailto:kuntimmy@gmail.com" target='_blank' className='text-2xl m-3 hover:scale-110'>
            <AiOutlineMail/>
        </a>
        <a href='https://wa.me/message/QF4ERDN5JIYUP1' target='_blank' className='text-2xl m-3 hover:scale-110'>
            <AiOutlineWhatsApp/>
        </a>
        <a href="https://www.linkedin.com/in/timileyin-adedokun-35b36b219" target='_blank' className='text-2xl m-3 hover:scale-110'>
<AiOutlineLinkedin/>
        </a>

<a href="https://github.com/Timley53" target='_blank' className='text-2xl m-3 hover:scale-110' >
    <AiOutlineGithub/>
</a>

    </div>


    <p className='text-center my-5'>
        Thank You for Visiting!!!
    </p>

    </div>
  )
}

export default Contact