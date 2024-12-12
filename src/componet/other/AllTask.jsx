import React, { useContext } from 'react'
import { AuthContext } from '../../assets/context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl mt-5 shadow-2xl'>
      <div className='bg-gradient-to-r from-purple-600 to-pink-600 mb-4 py-3 px-6 flex justify-between rounded-lg shadow-lg'>
        <h2 className='text-lg font-semibold w-1/5 text-white'>Employee Name</h2>
        <h3 className='text-lg font-semibold w-1/5 text-white'>New Task</h3>
        <h5 className='text-lg font-semibold w-1/5 text-white'>Active Task</h5>
        <h5 className='text-lg font-semibold w-1/5 text-white'>Completed</h5>
        <h5 className='text-lg font-semibold w-1/5 text-white'>Failed</h5>
      </div>
      
      <div className='space-y-3'>
        {userData.map((elem, idx) => (
          <div 
            key={idx} 
            className='backdrop-blur-lg bg-white/5 border border-emerald-500/20 mb-2 py-3 px-6 flex justify-between rounded-lg
                     hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer'
          >
            <h2 className='text-lg font-medium w-1/5 text-emerald-400'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400 flex items-center justify-center'>
              <span className='bg-blue-400/20 px-4 py-1 rounded-full'>{elem.taskCounts.newTask}</span>
            </h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400 flex items-center justify-center'>
              <span className='bg-yellow-400/20 px-4 py-1 rounded-full'>{elem.taskCounts.active}</span>
            </h5>
            <h5 className='text-lg font-medium w-1/5 text-green-400 flex items-center justify-center'>
              <span className='bg-green-400/20 px-4 py-1 rounded-full'>{elem.taskCounts.completed}</span>
            </h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400 flex items-center justify-center'>
              <span className='bg-red-400/20 px-4 py-1 rounded-full'>{elem.taskCounts.failed}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask