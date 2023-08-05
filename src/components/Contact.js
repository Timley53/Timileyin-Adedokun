import React from 'react'
import {HiPhoneIncoming, } from 'react-icons/hi'
import {AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineMail, AiOutlineGithub} from 'react-icons/ai'
import DownloadResume from './DownloadResume'




function Contact() {
  return (
    <div className='bg-slate-200 pt-20 w-full p-2'  id='contact'>



         <h1 className='text-center text-3xl sm:text-left sm:p-2'>Contact me</h1>

         <div className="text-center w-[60%] sm:w-full sm:p-2 mx-auto sm:text-left">
         I'm open to feedback and actively seek opportunities to learn from more experienced professionals in the field.if you have any inquiries or if you'd like to collaborate on a project.
         </div>

         <div className="w-full flex items-center justify-center m-2 py-4 sm:items-start text-left">
         <DownloadResume/>

         </div>



    <div className="flex mx-auto w-[80%] items-center justify-center m-3 sm:w-full sm:items-start">

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