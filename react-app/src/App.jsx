// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Login from "./pages/Login"
// import Dashboard from "./pages/Dashboard"
// import EmployeeList from "./pages/EmployeeList"
// import ProtectedRoute from "./routes/ProtectedRoute"
// import EmployeeDetails from "./pages/EmployeeDetails"
// import AddEmployee from "./pages/AddEmployee"
// import Layout from "./components/Layout"


// <Route
//   path="/employees"
//   element={
//     <ProtectedRoute>
//       <EmployeeList />
//     </ProtectedRoute>
//   }
// />


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//              <Route
//           element={
//             <ProtectedRoute>
//               <Layout />
//             </ProtectedRoute>
//           }
//         ></Route>
// <Route
//   path="/dashboard"
//   element={
//     <ProtectedRoute>
//       <Dashboard />
//     </ProtectedRoute>
//   }
// />

//         <Route
//   path="/employees"
//   element={
//     <ProtectedRoute>
//       <EmployeeList />
//     </ProtectedRoute>
//   }
// />
//         <Route
//   path="/employees/:id"
//   element={
//     <ProtectedRoute>
//       <EmployeeDetails />
//     </ProtectedRoute>
//   }
// />
//         <Route
//   path="/employees/add"
//   element={
//     <ProtectedRoute>
//       <AddEmployee />
//     </ProtectedRoute>
//   }
// />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import EmployeeList from "./pages/EmployeeList"
import EmployeeDetails from "./pages/EmployeeDetails"
import AddEmployee from "./pages/AddEmployee"
import ProtectedRoute from "./routes/ProtectedRoute"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTE */}
        <Route path="/login" element={<Login />} />

        {/* PROTECTED LAYOUT */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* DEFAULT DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* EMPLOYEES */}
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
