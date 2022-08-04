import React from 'react'
import Item from './SingComp/item'
import ViewItem from './SingComp/viewGraphiItem'

function GraphicDesign() {

  
  return (
    <div className='flex flex-row gap-4'>
    <div className='flex-1 flex flex-col gap-4'>
    
        <Item name='graphicDesign' avatar='https://www.adobe.com/content/dam/cc/tnt/emea/emea0856/photoshop.svg' title="Adobe Photoshop" discription='Photoshop is tool to Create Beautiful Images, Graphics, Paintings, and 3D Artwork. If You Can Dream It, You Can Make It with Photoshop.'/>
        <Item name='graphicDesign' avatar='https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_ai_mnemonic?$png$&jpegSize=100&wid=160' title="Adobe Illustrator" discription='Illustrator help us to create industry-standard vector graphics app to create logos, icons, drawings, typography, and illustrations for print and web'/>
        <Item name='graphicDesign' avatar='https://www.adobe.com/content/dam/shared/images/product-icons/svg/indesign.svg' title="Adobe InDesign" discription='InDesign projects faster with everything to create and publish books, digital magazines, eBooks, posters, interactive PDFs and more.'/>
        <Item name='graphicDesign' avatar='https://www.coreldraw.com/static/cdgs/images/home/coreldraw-wm.png' title="CorelDRAW" discription='Embark on a design journey with pro tools for vector illustration, layout, photo editing, typography and collaboration.'/>
        
     </div>
     <div className='flex-1 bg-dark-700 rounded p-4'>
         <ViewItem/>
     </div>
     
 </div>
  )
}

export default GraphicDesign