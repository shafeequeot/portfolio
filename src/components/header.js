import React, { useState } from 'react'


function Header() {
    const [mobMenu, setMobMenu] = useState(false)
    return (
        <header className="text-white w-3/5 bg-dark-700 rounded-xl p-4 h-15  bg-opacity-60 m-auto top-4 backdrop-blur-lg	sticky flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 font-bold text-purple-800 bg-dark-50 select-none rounded-full">
                    OT
                </div>
                <div className='text-sm font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text'>Shafeeque</div>
            </div>
            <div className="  cursor-pointer  ease-in-out" onClick={() => setMobMenu((prev) => !prev)}>
                <div className={mobMenu ? "hidden" : "visible space-y-2 ease-in-out"}>

                    <div className="w-8 h-0.5 bg-gray-400"></div>
                    <div className="w-8 h-0.5 bg-gray-400"></div>
                    <div className="w-8 h-0.5 bg-gray-400"></div>
                </div>
            </div>
            <svg onClick={() => setMobMenu((prev) => !prev)}
                className={mobMenu ? "visible h-8 w-8 text-gray-400 ease-in-out cursor-pointer" : "hidden"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>


        </header>
    )
}

export default Header