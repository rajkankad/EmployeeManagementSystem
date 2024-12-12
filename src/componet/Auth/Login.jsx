import React, { useState } from 'react'
// import { showPassword } from '../../assets/context/AuthProvider'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import { useNavigate } from 'react-router-dom'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-2xl w-[450px] transform hover:scale-105 transition-all duration-500 border border-white/20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">Employee Portal</h2>
          <p className="text-gray-300 mt-3 font-light">Access your workspace</p>
        </div>

        <form onSubmit={submitHandler} className="space-y-8">
          <div className="group">
            <label className="block text-pink-300 text-sm font-medium mb-3">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                placeholder="Enter your work email"
                required
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>

          <div className="group">
            <label className="block text-purple-300 text-sm font-medium mb-3">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                placeholder="Enter your password"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPass ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg shadow-purple-500/30"
          >
            Sign In to Portal
          </button>
        </form>

        {/* <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm">
            Demo Access
          </p>
          <p className="text-gray-400 text-xs mt-2 font-light">
            Email: admin@co.com | Password: 123
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Login