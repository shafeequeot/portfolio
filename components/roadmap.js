import React from 'react'
import Image from 'next/image'
import roadMap from '../public/images/roadmap.png'
import carrierHistory from '../api/carrier'


function Roadmap() {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/3 opacity-50'>
                <Image src={roadMap} alt="web designer raodmap" />
            </div>
            <div className='flex flex-col'>
                {
                    carrierHistory.map((job, id) => 
                       
                        <div key={id} className='flex flex-row  my-3 gap-3 border-gray-600 border-dashed border-b'>
                            <div className='flex flex-col items-center' >

                                <div className='bg-dark-800 text-dark-200 h-14 w-14 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg uppercase'>
                                    {id+1}
                                </div>
                                <span className='font-black text-lg text-dark-600'>
                                    {job.Year.split(" - ")[0]}
                                </span>
                            </div>

                            <div className='flex flex-col mb-4'>
                                <span className=' font-normal'>
                                    {`${job.company} (${job.Place})` }
                                </span>
                                <span className='italic text-dark-400'>
                                    {`${job.Designation} (${job.Year})`}
                                </span>
                                <span className='text-sm text-dark-200'>

                                    {job.Discripton}
                                </span>
                            </div>
                        </div>

                    )

                }
            </div>

        </div>
    )
}

export default Roadmap