import React from 'react'

function History(props) {
  return (
    <div className='flex flex-row gap-2 border-gray-600 border-dashed border-b'>
        <div className='flex flex-col items-center' >
            
        <div className='bg-dark-800 h-14 w-14 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg uppercase'>
            1
        </div>
        <span className='font-black text-lg text-dark-600'>
            2012
        </span>
        </div>
        
        <div className='flex flex-col'>
            <span className=' font-normal'>
                Excel Graphics Printing Press
            </span>
            <span className='text-sm text-dark-200'>

                I am working in excel graphics printing press   
            </span>
        </div>
    </div>
  )
}

export default History