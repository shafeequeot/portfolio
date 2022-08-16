import React from 'react'
import CoverSection from '../components/coverSection'
import Webdesign from '../components/webdesign'
import Title from '../components/reUsable/title'
import GraphicDesign from '../components/graphicDesign'
import IconSection from '../components/iconSection'
import Roadmap from '../components/roadmap'

function Homepage() {
  return (
    <div className="m-auto container">
      <CoverSection />
      <IconSection />
      <Title  text="Web design works" />
      <Webdesign />
      <Title text="Graphic design works" />
      <GraphicDesign />
      <Title text="Road Map" />
      <Roadmap/>
    </div>
  )
}

export default Homepage