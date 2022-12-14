import React from 'react'
// import BackgroundAnimation from './backgroundAnimation'
import Image from 'next/image'
import coverPhoto from '../public/images/banner-02.png'
import Link from 'next/link'
// import te from '../../public/images'

function CoverSection() {



  return (
    <div id='aboutMe' className='transition-transform font-normal  flex flex-col  pb-10 p-10 shadow-xl my-10 rounded-lg gap-0'>
      <span className='text-lg lg:text-5xl md:text-3xl opacity-30 animate-bounce'>turning ideas into </span>
      <span className=' md:text-7xl lg:text-8xl text-6xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text'> Web / Graphic </span>
      <span className='lg:text-8xl md:text-7xl text-4xl opacity-30'>products </span>

      <div className='text-sm mt-16  text-cyan-200 w-36 hover:w-1/5 ease-in-out duration-300 cursor-pointer'>
      <Link href="/#projects">

       <a>view projects
        </a> 
      </Link>
        <div className='border-b border-cyan-200 border-solid w-1/3 hover:w-15'></div>
      </div>

      <div className='font-thin mt-16 text-xs md:text-sm lg:text-base w-9/12'>
        Hello stranger! 👋, my name is Muhammed Shafeeque and I am a frontend, Graphic Designer and SEO Expert, passionate
        about digital products that help people experience everyday life, not endure it.
      </div>

      <div className='mt-16 flex flex-col animate-text'>
        <span className='font-medium text-5xl '><span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Yeah, I work hard </span>💼</span>
        <span className='font-thin'>Dedicated to work. Timely, Professionaly and unique.</span>
      </div>

      <div className='absolute right-20 flex gap-4 h-1/2 opacity-25 overflow-hidden object-contain  w-1/3 z-0'>
        <div>

          <Image width={350} height={2200} className='ease-in-out duration-700 animate-moveup  object-cover' src={coverPhoto} alt='cover photo'></Image>
        </div>
        <div>
        <Image className='ease-in-out duration-700 animate-moveup2  object-cover' src={coverPhoto} alt='cover photo'></Image>
        </div>

        <div>

        <Image  className='ease-in-out duration-700 animate-moveup3  object-cover' src={coverPhoto} alt='cover photo'></Image>
        </div>




      </div>
    </div>
  )
}
{/* <BackgroundAnimation /> */}
export default CoverSection
