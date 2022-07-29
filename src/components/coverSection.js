import React from 'react'
import BackgroundAnimation from './backgroundAnimation'

function CoverSection() {
  return (
    <div id='bgAnimation' className='transition-transform hover:scale-110 font-normal  flex flex-col  pb-10 p-10 shadow-xl my-10 rounded-lg gap-0'>
        <span className='text-lg lg:text-5xl md:text-3xl opacity-30 animate-bounce'>turning ideas into </span>
        <span className=' md:text-7xl lg:text-8xl text-6xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text'> Web / Graphic </span>
            <span className='lg:text-8xl md:text-7xl text-4xl opacity-30'>products </span>
    
    <div className='text-sm mt-16  text-cyan-200 w-36 hover:w-1/5 ease-in-out duration-300 cursor-pointer'>
      view projects
      <div className='border-b border-cyan-200 border-solid w-1/3 hover:w-15'></div>
    </div>
    </div>
  )
}
<BackgroundAnimation/>
export default CoverSection

