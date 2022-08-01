import React from 'react'
import { useSelector } from 'react-redux'



function ViewItem() {
  const portfolio = useSelector((state) => state.portfolio.value)
  console.log(portfolio)
  
  
    const projectList = portfolio.filterProjects.map((key,id) => 
        <div className='bg-dark-800 p-2 rounded ' >
          <div className='font-medium text-cyan-400 pb-2'>
          {key.name} 
          <div className=' border-b border-cyan-300 w-1/3'></div>
          </div>
          <div className='text-sm text-dark-50'>
          {key.discription}
          </div>
          <a target="_blank" className=' text-cyan-100 p-1 text-sm' href={key.Url}>View project</a>

          <div className='flex flex-row text-xs gap-1'>
            {key.tag.map(tag=> 
            <div className='  bg-dark-400 rounded p-1 mt-2 '>{tag}</div>
            )}
          </div>

          <div>
            <img src={key.image} alt={key.name}></img>
          </div>
          </div>
     
    );
          
    
    return (
      <div className='grid grid-flow-col gap-3'>
        {projectList}
      </div>
  )
}

export default ViewItem