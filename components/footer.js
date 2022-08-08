import React from 'react'
import email from '../public/images/icons/email.svg'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'



function Footer() {
  return (
    <div className='absolute w-full mt-4'>
      <div className='sticky bottom-0 flex text-sm bg-dark-700 w-full justify-center content-center text-center gap-8 h-12 items-center'>
        <div className='flex gap-3 items-center'>
          <div className='p-2 bg-dark-900 rounded-full  '>
<MdOutlineMarkEmailUnread/>
          </div>
          +971 50 800 1789
        </div>

        <div className='flex gap-3 items-center'>
          <div className='p-2 bg-dark-900 rounded-full'>

          <BsTelephone/>

          </div>
          shafeequeot@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Footer