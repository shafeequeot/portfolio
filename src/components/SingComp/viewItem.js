import React from 'react'
import { useSelector } from 'react-redux'



function ViewItem(props) {
  const portfolio = useSelector((state) => state.portfolio.value)
  return (
    <div>
        <div>{portfolio.name} Projects</div>
        <div>{portfolio.description}</div>
        <div>{portfolio.photo}</div>
    </div>
  )
}

export default ViewItem