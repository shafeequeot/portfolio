import React from 'react'
import { useDispatch } from 'react-redux'
import { changeItem } from '../../redux/portfolioSlice'
import allprojects from '../../api/projects'
import Image from 'next/image'

function Item(props) {




    const dispatch = useDispatch()
    const clickedItem = (e) => {
        let filterProjects

        if(e.target.name === 'webDesign'){

            filterProjects = allprojects.frameWorks.filter(function (el) {
                if (el.tag.includes(props.title)) return el
            })

            dispatch(changeItem({
                filterProjects:{'type':'webDesign', item: filterProjects}
            }))
        }

        if(e.target.name === 'graphicDesign'){


             filterProjects = allprojects.graphicWorks.filter(function (el) {
                if (el.tag.includes(props.title)) return el
            })

            dispatch(changeItem({
                filterProjects:{'type':'graphicDesign', item: filterProjects}
            }))
        }


      

    }


    return (
        <div>

            <label >
                <input value={props.title} onChange={clickedItem} className='peer hidden' name={props.name} type="radio" />

                <div className='p-2 bg-dark-800 rounded border  border-dark-600 peer-checked:border-dark-200 hover:border-dark-200 cursor-pointer flex flex-row  gap-4 items-center'>
                    <div className='flex items-center justify-center overflow-hidden rounded-full md:flex-shrink-0  bg-dark-500 h-6 w-6 md:h-16 md:w-16'>
                        <img  className='object-contain h-12 w-12' src={`${props.avatar}`} alt={props.title} />
                    </div>
                    <div className='hidden lg:block'>
                        <div className='text-base uppercase font-medium '>
                            {props.title}
                        </div>
                        {/* <div className='text-sm  text-dark-100'>
                            {props.discription}
                        </div> */}
                    </div>
                </div>
            </label>
        </div>

    )
}

export default Item