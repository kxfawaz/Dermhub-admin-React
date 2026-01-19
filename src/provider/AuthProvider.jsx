import axios from "axios"
import {
    createContext,
    useContext,
    useEffect,
    useState,
    useMemo,
} from 'react'


const AuthContext = createContext();



const AuthProvider = ({children}) => {

const [token,setToken_] = useState(localStorage.getItem("token")) // JWT token in state , initial value comes from localstorage

const setToken = (newToken) => {  // update token using state with newToken
    setToken_(newToken)
}

useEffect(()=> {
    if(token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token; // set a global header and all future axios requests include JWT token if user is authenticated
        localStorage.setItem('token',token) // make sure logins persist across page refresh and browser restarts
    } else { // if user logged out / not authenticated
        delete axios.defaults.headers.common["Authorization"]; // prevents accidental access, JWT token not being sent with every request
        localStorage.removeItem('token') // remove token from localstorage
    }
}, [token])

const contextValue = useMemo(  
    () => ({
        token,
        setToken,
    }),
    [token]
);

return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
)

}
export const useAuth = () => {   // easy access for components 
    return useContext(AuthContext)
}
export default AuthProvider;