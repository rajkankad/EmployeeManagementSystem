import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'    

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Initialize localStorage if needed
        if (!getLocalStorage()) {
            setLocalStorage()
        }
        
        // Get employee data from localStorage
        const storedData = getLocalStorage()
        if (storedData && storedData.employees) {
            setUserData(storedData.employees)
        }
    }, [])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider