import React from 'react'

function Title(props) {
  return (
    <div className='text-5xl uppercase flex font-medium  ease-in-out opacity-10 duration-1000 justify-center bg-dark-800 p-4 my-4 text-cyan-200'>{props.text}</div>
  )
}

export default Title