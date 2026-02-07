import { useNavigate } from "react-router-dom"
import { useAuth } from "../provider/AuthProvider"
import axios from "axios"
import { useState } from "react"

const AdminLogin = () => {
  const {setToken} = useAuth()  //accesing the token from context
  const navigate = useNavigate();

  const [formData,setFormData] = useState({username:"",password:""});
  const [err,setError] = useState("")

  function handleChange(e){
    const {name,value} = e.target;
    setFormData((f) => ({...f,[name]:value}))
  }
  async function handleSubmit(e){
    e.preventDefault();
    setError("");
    try{
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/login`,formData);
      setToken(res.data.access_token) // saves token
      navigate("/consultations",{replace:true}) // when authenticated navigate to /consultations and clear history
    } catch(err){
      const msg =
        err.response?.data?.error || // if err.resp exists check err.response.data.error and use it,  if not return undefined
        err.response?.data?.msg || // some return "msg", if err.resp. exists check  err.response.data.msg and use it, if not return undefined
        "Login failed"; // if err.response doesnt exists return login failed
      setError(msg)
     
    }
 }
 return (
  <div className="auth-page">
    <div className="auth-card">
      <h1 className="auth-title">Admin Login</h1>
        <p className="auth-subtitle">Sign in to manage the dashboard</p>
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="field">
        <label className="label">Username</label>
        <input
        className=".admin-login-input"
        name="username"
        value={formData.username}
        onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input
        className=".admin-login-input"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        />
      </div>
      {/* if error exists, show the error in a <p */}
      {err && <p style={{color:"red"}}>{err}</p>} 

      <button className="btn-primary" type="submit">Login</button>
    </form>
  </div>
  </div>

 )
}
export default AdminLogin