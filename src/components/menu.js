import React from 'react'
function Menu(props) {
  return (
    <div className={`${props.mobMenu ? "visible overflow-y-auto fixed z-40 p-4 w-auto h-screen bg-gray-800 transition-transform left-0 top-0 translate-x-0 ease-in-out duration-500" : "-translate-x-full overflow-y-auto fixed top-0 h-screen  ease-in-out duration-500 "}`} >

<div  class="" tabindex="-1" >
    <h5 id="drawer-navigation-label" class="text-base font-semibold  uppercase text-gray-400">Menu</h5>
 
  <div class="overflow-y-auto py-4">
      <ul class="space-y-2">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6  transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">About Me</span>
            </a>
         </li>
         <li>
            <button type="button" class="flex items-center p-2 w-full text-base font-normal  rounded-lg transition duration-75 group  text-white hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">What i know</span>
            </button>
         
         </li>
         <li>
            <button type="button" class="flex items-center p-2 w-full text-base font-normal  rounded-lg transition duration-75 group  text-white hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Career history</span>
            </button>
         
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal = rounded-lg text-whitehover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Portfolio</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Get me</span>
               <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium   rounded-full bg-blue-900 text-blue-200">3</span>
            </a>
         </li>
         
      </ul>
   </div>
</div>
   </div>

  )
}


export default Menu