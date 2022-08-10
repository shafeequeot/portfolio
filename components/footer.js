import React from 'react'
import email from '../public/images/icons/email.svg'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'



function Footer() {
  return (
    <div className='absolute w-full mt-4'>
      <div className='sticky bottom-0 flex text-sm bg-dark-700 w-full justify-center content-center text-center md:gap-8 md:h-12 sm:p-2 items-center flex-col md:flex-row'>
        <div className='flex gap-3 items-center'>
          <div className='p-2 bg-dark-900 rounded-full  '>
            <MdOutlineMarkEmailUnread />
          </div>
          +971 50 800 1789
        </div>

        <div className='flex gap-3  items-center'>
          <div className='p-2 bg-dark-900 rounded-full'>

            <BsTelephone />

          </div>
          shafeequeot@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Footer