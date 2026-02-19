import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "../styles/detailed.css"

const EmployeeDetails = () => {
  const { id } = useParams()

  const employee = useSelector((state) =>
    state.employees.list.find(
      (emp) => emp.id === Number(id)
    )
  )

  if (!employee) {
    return <p>Employee not found</p>
  }

  return (
    <div className="details-page">
      <h2>Employee Details</h2>

      <div className="details-card">
        <div className="row">
          <span>Name</span>
          <strong>{employee.name}</strong>
        </div>

        <div className="row">
          <span>Email</span>
          <strong>{employee.email}</strong>
        </div>

        <div className="row">
          <span>Status</span>
          <strong className="status active">
            Active
          </strong>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails
