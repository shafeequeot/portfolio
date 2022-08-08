import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GiBalaclava} from 'react-icons/gi'
import {GiGiftOfKnowledge} from 'react-icons/gi'
import { MdWork } from 'react-icons/md'
import { MdOutlineComputer } from 'react-icons/md'
import { MdContacts } from 'react-icons/md'


function Menu(props) {
  return (
    <div className={`${props.mobMenu ? "visible overflow-y-auto fixed z-50 p-4 w-auto h-screen bg-gray-800 transition-transform left-0 top-0 translate-x-0 ease-in-out duration-500" : "-translate-x-full overflow-y-auto fixed top-0 h-screen  ease-in-out duration-500 "}`} >

<div  className="" >
    <h5 id="drawer-navigation-label" className="text-base font-semibold  uppercase text-gray-400">Menu</h5>
 
  <div className="overflow-y-auto py-4">
      <ul className="space-y-2">
         <li>
            <Link href="/#aboutMe">

            <a className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
               <GiBalaclava className='text-lg'/>
               <span className="ml-3">About Me</span>
            </a>
            </Link>
         </li>
         <li>
            <Link href="/#whatIKnow">

            <button type="button" className="flex items-center p-2 w-full text-base font-normal  rounded-lg transition duration-75 group  text-white hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <GiGiftOfKnowledge className="text-lg"/>
                  
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Portfolio</span>
            </button>
         
            </Link>

         </li>
         <li>
            <Link href="/#careerHistory">

            <button type="button" className="flex items-center p-2 w-full text-base font-normal  rounded-lg transition duration-75 group  text-white hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <MdWork className="text-lg"/>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Career history</span>
            </button>
            </Link>

         
         </li>
         <li>
            <Link href="/web-freelancer">

            <a className="flex items-center p-2 text-base font-normal = rounded-lg text-whitehover:bg-gray-700">
            <MdOutlineComputer className="text-lg"/>
               <span className="flex-1 ml-3 whitespace-nowrap">New Design?</span>
            </a>
            </Link>
         </li>
         <li>
            <Link href="/contact-designer">
            <a  className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
            <MdContacts className="text-lg"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Get me</span>
               <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium   rounded-full bg-blue-900 text-blue-200">3</span>
            </a>
            </Link>
         </li>
         
      </ul>
   </div>
</div>
   </div>

  )
}


export default Menu