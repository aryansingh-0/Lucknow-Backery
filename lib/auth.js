'use client'

import { createContext, useContext, useEffect, useState } from 'react'
 
const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  
  const [profileloading, setProfileLoading] = useState(true)
  const [stats, setStats] = useState(null);
 
  

 
  // const checkAuth = async () => {
  //   try {
  //     const response = await fetch('/api/user/auth/me')
  //     setUser(response.user)
  //     checkProfile()
  //     fetchDashboardStats()
  //   } catch (error) {
  //     setUser(null)
  //   } finally {
  //     setLoading(false)
  //   }
  // }


  
  const value = {
    
   setLoading,
   loading,
    
     
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}