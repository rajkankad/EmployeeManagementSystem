import React, { useState } from 'react'

const AcceptTask = ({data}) => {
  const [status, setStatus] = useState(data.status || 'pending')

  const handleComplete = () => {
    setStatus('completed')
    // Here you would typically make an API call to update the task status
  }

  const handleFail = () => {
    setStatus('failed') 
    // Here you would typically make an API call to update the task status
  }

  return (
    <div className={`flex-shrink-0 h-full w-[300px] p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
      status === 'completed' ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
      status === 'failed' ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
      'bg-gradient-to-br from-red-400 to-pink-500'
    }`}>
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white text-sm px-4 py-1.5 rounded-full font-medium shadow-md">
          {data.category}
        </h3>
        <h4 className="text-sm text-white/90 font-medium backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full">
          {data.taskDate}
        </h4>
      </div>
      
      <h2 className="mt-6 text-2xl font-bold text-white tracking-wide">
        {data.taskTitle}
      </h2>
      
      <p className="mt-3 text-sm text-white/80 leading-relaxed">
        {data.taskDescription}
      </p>
      
      <div className="flex justify-between mt-8 space-x-4">
        <button 
          onClick={handleComplete}
          disabled={status !== 'pending'}
          className={`flex-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-medium py-2 px-4 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${
            status !== 'pending' ? 'opacity-50 cursor-not-allowed' : ''
          }`}>
          Mark as Completed
        </button>
        <button 
          onClick={handleFail}
          disabled={status !== 'pending'}
          className={`flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg font-medium py-2 px-4 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${
            status !== 'pending' ? 'opacity-50 cursor-not-allowed' : ''
          }`}>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask