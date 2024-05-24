import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

//create a context to keep track of the user if they are authenticated or not.
export const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {
  const [ authUser, setAuthUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/auth/check', {credentials: "include"})
        const data = await res.json()
        setAuthUser(data.user) // it could be null or authenticated user object.
        
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    checkUserLoggedIn()
  }, [])
    
  // whatever we pass into value, that would be available in our entire app.
  return (
    <AuthContext.Provider value={{authUser, setAuthUser, loading}}>
     {children} 
    </AuthContext.Provider>
  )
}

