import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import EmployeeForm from "../components/EmployeeForm"
import { addEmployee } from "../features/employees/employeeSlice"

const AddEmployee = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = {
    name: "",
    email: ""
  }

  const handleSubmit = (values) => {
    dispatch(addEmployee(values))
    navigate("/employees")
  }

  return (
    <div>
      <h2>Add Employee</h2>
      <EmployeeForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        submitText="Add"
      />
    </div>
  )
}

export default AddEmployee
