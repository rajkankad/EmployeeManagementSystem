import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage'
export const AuthContext = createContext()
export const showPassword = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Initialize localStorage if needed
        if (!getLocalStorage()) {
            setLocalStorage()
        }
        // Get employee data from localStorage
        const { employees } = getLocalStorage() || {}
        setUserData(employees)
    }, [])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
