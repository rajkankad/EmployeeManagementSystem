import React, { useState } from 'react'

const AcceptTask = ({data}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`flex-shrink-0 h-full w-[300px] p-6 rounded-xl relative overflow-hidden
                       bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900
                       transform transition-all duration-500 hover:scale-105
                       ${isHovered ? 'shadow-xl shadow-purple-500/30' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%)] bg-[length:21px_20px] animate-[grain_8s_linear_infinite]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className='flex justify-between items-center'>
                    <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-1.5 rounded-full font-medium shadow-lg'>
                        {data.category}
                    </span>
                    <span className='text-gray-300 text-sm font-medium'>{data.taskDate}</span>
                </div>

                <h2 className='mt-5 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    {data.taskTitle}
                </h2>

                <p className='text-sm mt-3 text-gray-300 leading-relaxed'>
                    {data.taskDescription}
                </p>

                <div className='flex justify-between mt-6 gap-4'>
                    <button 
                        className='flex-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg font-medium py-2 px-4 text-sm text-white
                                 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30
                                 active:scale-95'
                    >
                        Complete Task
                    </button>
                    <button 
                        className='flex-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg font-medium py-2 px-4 text-sm text-white
                                 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30
                                 active:scale-95'
                    >
                        Mark Failed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask