import React, { useState, useEffect } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    setAnimate(true);
    // Delay showing greeting for a staggered animation effect
    setTimeout(() => setShowGreeting(true), 500);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-8 hover:shadow-2xl transition-all duration-500">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent)] animate-[pulse_2s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%)] bg-[length:20px_20px] animate-[grain_2s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-[glow_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Header Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          {/* Left side - Logo & Welcome Message */}
          <div className={`transform transition-all duration-1000 ${animate ? 'translate-x-0 opacity-100 rotate-0' : '-translate-x-20 opacity-0 -rotate-12'}`}>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
              Task Manager Pro
            </h1>
            {showGreeting && (
              <p className="mt-2 text-gray-300 text-lg animate-[bounceIn_1s_ease-out] hover:text-purple-300 transition-colors">
                Welcome back, <span className="font-semibold text-purple-400 hover:text-pink-400 transition-colors">{props.data?.firstName || 'User'}</span>
              </p>
            )}
          </div>

          {/* Right side - User Profile & Logout */}
          <div 
            className={`flex items-center space-x-6 transform transition-all duration-1000 ${animate ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-20 opacity-0 rotate-12'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Profile Section */}
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform transition-all duration-500 
                              ${isHovered ? 'scale-110 rotate-12' : ''} 
                              hover:shadow-lg hover:shadow-purple-500/50`}>
                  <span className="text-xl font-bold text-white group-hover:animate-bounce">
                    {props.data?.firstName?.[0] || 'U'}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-indigo-900 animate-pulse"></div>
              </div>
              <div className="hidden md:block group-hover:animate-[fadeIn_0.5s_ease-out]">
                <p className="text-white font-medium hover:text-purple-300 transition-colors">{props.data?.firstName || 'User'}</p>
                <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors">{props.data?.email || 'user@example.com'}</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium 
                       transform transition-all duration-500 hover:scale-110 hover:shadow-xl 
                       hover:shadow-red-500/40 active:scale-90 hover:rotate-2
                       animate-[pulse_2s_ease-in-out_infinite]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header
