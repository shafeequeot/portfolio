import React from 'react'
import { useSelector } from 'react-redux'



function ViewItem() {
  const portfolio = useSelector((state) => state.portfolio.value)


  const projectList = portfolio.webProjects.map((key, id) =>
    <div className='bg-dark-800 p-2 rounded flex ' >
      <div className='flex-1 flex flex-col gap-2'>

        <div className='font-medium text-cyan-400 '>
          {key.name}
          <div className=' border-b border-cyan-300 w-8'></div>
        </div>
        <div className='text-sm text-dark-50'>
          {key.discription}
        </div>
        <div>
          <a rel="noreferrer" target="_blank" className=' text-cyan-100 p-1 border-solid border-cyan-200 border text-xs rounded ' href={key.Url}>View project</a>
        </div>

        <div className='flex flex-row text-xs gap-1'>
          {key.tag.map(tag =>
            <div className='  bg-dark-400 rounded p-1 '>{tag}</div>
          )}
        </div>
      </div>

      <div className='bg-dark-500  '>
      <div class="group cursor-pointer flex flex-col">
        <div className=' w-44  overflow-hidden'>
        <img className='object-fill w-44' src={key.image} alt={key.name}></img>
        </div>
        <div class="fixed ease-in-out duration-700 bottom-1/2 left-1/2 hidden  h-1/2 w-1/2 bg-gray-200 z-50 shadow-lg rounded object-cover  group-hover:block ...">
        <img className='  w-full' src={key.image} alt={key.name}></img>
        </div>
      </div>
        {console.log(key.image)}
      </div>
    </div>

  );


  return (
    <div className='grid  auto-cols-auto gap-3'>
      {projectList}
     
    </div>
  )
}

export default ViewItem