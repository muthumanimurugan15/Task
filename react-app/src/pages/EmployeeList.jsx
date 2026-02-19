import { useState, useMemo, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  deleteEmployee,
  getEmployees
} from "../features/employees/employeeSlice"
import SearchBox from "../components/SearchBox"
import Pagination from "../components/Pagination"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

import "../styles/table.css"

const PER_PAGE = 5

const EmployeeList = () => {
  const dispatch = useDispatch()
const navigate = useNavigate()

  const { list: employees, loading, error } = useSelector(
    (state) => state.employees
  )

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  // 🔥 FETCH JSON DATA
  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase())
    )
  }, [employees, search])

  const start = (page - 1) * PER_PAGE
  const paginated = filteredEmployees.slice(start, start + PER_PAGE)

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id))
    toast.error("Employee deleted")
  }

  // ⏳ Loading state
  if (loading) return <p>Loading employees...</p>

  // ❌ Error state
  if (error) return <p>Error: {error}</p>

return (
  <div className="employee-page">
    <h2 className="employee-title">Employees</h2>

    <SearchBox value={search} onChange={setSearch} />

<ul className="employee-list">
  {paginated.map((emp) => (
    <li
      key={emp.id}
      className="employee-item clickable"
      onClick={() => navigate(`/employees/${emp.id}`)}
    >
      <div className="employee-info">
        <strong>{emp.name}</strong>
        <span>{emp.email}</span>
      </div>

      <div className="employee-actions">
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation() // ❗ stop navigation
            handleDelete(emp.id)
          }}
        >
          Delete
        </button>

        <span className="view-text">View →</span>
      </div>
    </li>
  ))}
</ul>



    <Pagination
      total={filteredEmployees.length}
      perPage={PER_PAGE}
      current={page}
      onChange={setPage}
    />
  </div>
)

}

export default EmployeeList
