import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex justify-around  mt-10 px-6">
      <div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl 
                    transform hover:scale-105 transition-all duration-500 group"
      >
        <div className="relative w-[15vw]">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative flex flex-col items-center">
            <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
              {data.taskCounts.completed}
            </span>
            <span className="mt-4 text-lg text-green-200 font-light tracking-wider uppercase">
              Completed
            </span>
            <div className="mt-6 p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 animate-pulse">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl 
                    transform hover:scale-105 transition-all duration-500 group"
      >
        <div className="relative w-[15vw]">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative flex flex-col items-center">
            <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-300">
              {data.taskCounts.active}
            </span>
            <span className="mt-4 text-lg text-yellow-200 font-light tracking-wider uppercase">
              Active
            </span>
            <div className="mt-6 p-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 animate-pulse">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl 
                    transform hover:scale-105 transition-all duration-500 group"
      >
        <div className="relative w-[15vw]">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative flex flex-col items-center">
            <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-300">
              {data.taskCounts.failed}
            </span>
            <span className="mt-4 text-lg text-red-200 font-light tracking-wider uppercase">
              Failed
            </span>
            <div className="mt-6 p-3 rounded-full bg-gradient-to-r from-red-500 to-rose-400 animate-pulse">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;
