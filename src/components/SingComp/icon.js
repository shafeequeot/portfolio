import React from 'react'

function Icon({url, alt}) {
  return (
    <div className='p-2 w-28 h-28  rounded-lg flex content-center items-center justify-center bg-dark-700 shadow-xl '>
        <img loading='lazy' className='rounded-xl' src={url} alt={alt}/>
    </div>
  )
}

export default Icon