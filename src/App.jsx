import "./App.css";
import AppRoutes from "./pages/index.jsx"
import AuthProvider from "./provider/AuthProvider";

function App(){
    return (
        <AuthProvider>
            <AppRoutes/>
        </AuthProvider>
    )
}

export default App