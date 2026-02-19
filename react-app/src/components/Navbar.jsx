import { useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div className="navbar">
      <span>Employee Management Dashboard</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar
