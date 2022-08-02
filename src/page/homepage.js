import React from 'react'
import CoverSection from '../components/coverSection'
import Webdesign from '../components/webdesign'
import Title from '../components/SingComp/title'
import GraphicDesign from '../components/graphicDesign'

function Homepage() {
  return (
        <div className="container m-auto">
      <CoverSection/>
      <Title text="Web design works"/>
      <Webdesign/>
      <Title text="Graphic design works"/>
      <GraphicDesign/>
      
      </div>
  )
}

export default Homepage