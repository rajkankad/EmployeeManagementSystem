import React from 'react'
import AcceptTask from './AccepTask' // Fixed typo in import path
import NewTask from './NewTask'
import CompleteTask from './CompeletTask' // Fixed typo in import path
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg">
          Task Management Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* New Tasks Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-purple-800 bg-white/70 p-3 rounded-lg shadow-md">
              New Tasks
            </h2>
            {data?.newTasks?.map((task, index) => (
              <NewTask key={index} data={task} />
            ))}
          </div>

          {/* Accepted Tasks Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-purple-800 bg-white/70 p-3 rounded-lg shadow-md">
              In Progress
            </h2>
            {data?.acceptedTasks?.map((task, index) => (
              <AcceptTask key={index} data={task} />
            ))}
          </div>

          {/* Completed Tasks Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-purple-800 bg-white/70 p-3 rounded-lg shadow-md">
              Completed
            </h2>
            {data?.completedTasks?.map((task, index) => (
              <CompleteTask key={index} data={task} />
            ))}
          </div>

          {/* Failed Tasks Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-purple-800 bg-white/70 p-3 rounded-lg shadow-md">
              Failed
            </h2>
            {data?.failedTasks?.map((task, index) => (
              <FailedTask key={index} data={task} />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/70 p-4 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-sm text-gray-600">Total Tasks</p>
            <p className="text-2xl font-bold text-purple-800">
              {(data?.newTasks?.length || 0) + 
               (data?.acceptedTasks?.length || 0) + 
               (data?.completedTasks?.length || 0) + 
               (data?.failedTasks?.length || 0)}
            </p>
          </div>
          <div className="bg-white/70 p-4 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-sm text-gray-600">Completion Rate</p>
            <p className="text-2xl font-bold text-green-600">
              {Math.round((data?.completedTasks?.length || 0) / 
                ((data?.completedTasks?.length || 0) + 
                 (data?.failedTasks?.length || 0)) * 100 || 0)}%
            </p>
          </div>
          <div className="bg-white/70 p-4 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-sm text-gray-600">In Progress</p>
            <p className="text-2xl font-bold text-blue-600">
              {data?.acceptedTasks?.length || 0}
            </p>
          </div>
          <div className="bg-white/70 p-4 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-sm text-gray-600">New Tasks</p>
            <p className="text-2xl font-bold text-yellow-600">
              {data?.newTasks?.length || 0}
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default TaskList