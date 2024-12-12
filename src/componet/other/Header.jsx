import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    window.location.reload();
  };

  return (
    <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-6 rounded-xl shadow-2xl">
      <div className="flex items-center justify-between backdrop-blur-sm bg-white/10 p-4 rounded-lg">
        <div className="flex items-center space-x-6">
          <div
            className="bg-white/30 p-4 rounded-full shadow-xl backdrop-blur-md 
                        transform hover:rotate-12 transition-all duration-300"
          >
            <span className="text-1xl">✨</span>
          </div>
          <div className="relative">
            <h1 className="text-white/70 text-sm font-light tracking-wider uppercase">
              Welcome back
            </h1>
            <span className="text-3xl font-bold text-white drop-shadow-lg">
              {/* {props.user|| ""} */}
              {/* {data?.firstName || ""} */}
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 to-transparent"></div>
          </div>
        </div>

        <button
          onClick={logOutUser}
          className="group bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-medium
                     border border-white/20 shadow-xl hover:bg-white/20 
                     transform hover:scale-105 transition-all duration-300 
                     flex items-center space-x-3"
        >
          <span className="group-hover:text-pink-200 transition-colors">
            Sign Out
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-1 transition-transform"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
