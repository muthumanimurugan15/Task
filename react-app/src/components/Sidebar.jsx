import { NavLink } from "react-router-dom"
import "../styles/sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">EMS</h2>

      <nav>
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/employees">
          Employees
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
