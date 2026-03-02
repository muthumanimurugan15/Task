import React from "react"
import "../styles/dashboard.css"
import { useState } from "react"




const Dashboard = () => {

  const [employees, setEmployees] = useState([
    { id: 1, name: "Ravi", age: 25 },
    { id: 2, name: "Karthik", age: 30 },
  ]);
const [newname, setNewName] = useState("")

const [newage, setNewAge] = useState("")
const[newid, setNewId] = useState("")


const [editID,setEditID] = useState(null)

const deleteEmployee = (id) => {
  setEmployees(employees.filter(e =>  e.id !== id))
}



const addEmployee = (e) => { 



if (!newname.trim() || !newage.trim()) return;



if (editID  !== null) {

setEmployees(
  employees.map(e =>
    e.id === editID
      ? { ...e, id: Number(newid), name: newname, age: Number(newage) }
      : e
  )
);
    setEditID(null);
}
else{
const newemployee = {
  id: Number(newid),
  name: newname,
  age: Number(newage)
}


setEmployees([...employees,newemployee])
}
setNewName("")
setNewAge("")
setNewId("")


}



const editemploye = (id) => {


  const updatedName = prompt("Enter new name");
    const updatedAge = prompt("Enter new age:");
  if (!updatedName || !updatedAge) return;

  setEmployees(employees.map(e => e.id === id ? {...e, name: updatedName, age: updatedAge} : e))
  
}

  return (
    <div>
      <h1 className="dashboard-title">Dashboard</h1>


   <input type="number" placeholder="Enter employee id..."  value={newid} onChange ={(e) => setNewId(e.target.value)}/>
  <input type="text" placeholder="Enter employee name..."  value={newname} onChange ={(e) => setNewName(e.target.value)}/>
  <input type="number" placeholder="Enter employee age..."  value={newage} onChange ={(e) => setNewAge(e.target.value)}/>
  <button type="submit" onClick={addEmployee}>Add Employee</button>




      {employees.map((emp)=>(
         <div key ={emp.id}>


         
            <li>
          {emp.id}-{emp.name} - {emp.age} 
          
          <button onClick={() => { setEditID(emp.id),setNewId(emp.id),
  setNewName(emp.name);
  setNewAge(emp.age); }}>Edit</button>
           <button onClick ={() => deleteEmployee(emp.id)}>delete</button>



          </li>
        

          </div>

      ))}




    </div>
  )
}

export default Dashboard
