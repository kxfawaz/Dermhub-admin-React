
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

const [token,setToken_] = useState(localStorage.getItem("token")) // JWT token in state , initial value comes from localstorage

const setToken = (newToken) => {  // update token using state with newToken
    setToken_(newToken)

    if(newToken) {
        localStorage.setItem('token',newToken) // make sure logins persist across page refresh and browser restarts
        axios.defaults.headers.common.Authorization = `Bearer ${newToken}` // set a global header and all future axios requests include JWT token if user is authenticated
    } else { // if user logged out / not authenticated
        localStorage.removeItem('token') // remove token from localstorage
        delete axios.defaults.headers.common.Authorization // prevents accidental access, JWT token not being sent with every request
    }
}


return (
    <AuthContext.Provider value={{token,setToken}}>
        {children}
    </AuthContext.Provider>
)
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;