import AdminNavbar from "../pages/AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return(
        <>
        <AdminNavbar/>
        <Outlet/>
        </>
    )
}

export default AdminLayout