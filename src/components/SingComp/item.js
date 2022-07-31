import React from 'react'

function Item(props) {
    return (
        <div>

            <label >
                <input className='peer hidden' name='frameworks' type="radio" />

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