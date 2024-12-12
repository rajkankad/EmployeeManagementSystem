import React, { useState, useEffect } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading
        setTimeout(() => setIsLoading(false), 1000)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)] bg-[length:50px_50px] animate-[grain_8s_linear_infinite]"></div>
            </div>

            <div className="container mx-auto px-4 py-8 space-y-8 relative z-10">
                <div className="transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                    <Header changeUser={props.changeUser} data={props.data} />
                </div>

                {isLoading ? (
                    <div className="flex items-center justify-center h-96">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl animate-pulse"></div>
                            <div className="relative animate-spin rounded-full h-32 w-32 border-4 border-purple-500 border-t-transparent shadow-lg"></div>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 animate-[fadeIn_1s_ease-out]">
                        <div className="group backdrop-blur-lg bg-white/10 rounded-2xl p-6 
                                    shadow-[0_0_15px_rgba(168,85,247,0.4)] 
                                    transform hover:translate-y-[-8px] hover:scale-105 
                                    transition-all duration-500 ease-out
                                    hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                                    animate-[slideIn_0.5s_ease-out]">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
                            <CreateTask data={props.data} />
                        </div>
                        
                        <div className="group backdrop-blur-lg bg-white/10 rounded-2xl p-6 
                                    shadow-[0_0_15px_rgba(168,85,247,0.4)]
                                    transform hover:translate-y-[-8px] hover:scale-105
                                    transition-all duration-500 ease-out
                                    hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                                    animate-[slideIn_0.5s_ease-out_0.2s]">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
                            <AllTask data={props.data} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminDashboard