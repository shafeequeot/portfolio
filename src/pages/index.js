import React from 'react'
import CoverSection from '../components/coverSection'
import Webdesign from '../components/webdesign'
import Title from '../components/singComp/title'
import GraphicDesign from '../components/graphicDesign'
import IconSection from '../components/iconSection'

function Homepage() {
  return (
        <div className="m-auto container">
      <CoverSection/>
      <IconSection/>
      <Title text="Web design works"/>
      <Webdesign/>
      <Title text="Graphic design works"/>
      <GraphicDesign/>
      
      </div>
  )
}

export default Homepage