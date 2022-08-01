import React from 'react'
import {useDispatch} from 'react-redux'
import {changeItem} from '../../redux/portfolioSlice'
import allprojects from './projects'
function Item(props) {

    const dispatch = useDispatch()
    const check = (e)=>{
        dispatch(changeItem({
            name:e.target.value,
            description: props.discription,
            projects: props.projects
        }))
        const selectedItem = ['react']

const filterProjects = allprojects.filter(function(el){
    if (el.tag.includes(props.title)) return el
})
        console.log(filterProjects)
    }


    return (
        <div>

            <label >
                <input value={props.title} onChange={check} className='peer hidden' name='frameworks' type="radio" />

                <div className='p-2 bg-dark-800 rounded border  border-dark-600 peer-checked:border-dark-200 hover:border-dark-200 cursor-pointer flex flex-row gap-4 items-center'>
                    <div className='flex items-center justify-center overflow-hidden rounded-full flex-shrink-0 bg-dark-500 h-16 w-16'>
                       <img className='object-contain h-12 w-12' src={props.avatar} alt={props.title}/>
                    </div>
                    <div>
                        <div className='text-base uppercase font-medium '>
                            {props.title}
                        </div>
                        <div className='text-sm  text-dark-100'>
                            {props.discription}
                        </div>
                    </div>
                </div>
            </label>
        </div>

    )
}

export default Item