import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  fetchEmployees,
  fetchEmployeeById
} from "../../services/employeeService"

/* =========================
   ASYNC THUNKS
========================= */

// 🔹 Get all employees
export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async () => {
    const response = await fetchEmployees()
    return response.data
  }
)

// 🔹 Get employee by ID
export const getEmployeeById = createAsyncThunk(
  "employees/getEmployeeById",
  async (id) => {
    const response = await fetchEmployeeById(id)
    return response.data
  }
)

/* =========================
   SLICE
========================= */

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
    selected: null,
    loading: false,
    error: null
  },
  reducers: {
    // 🔹 Add employee (local mock)
    addEmployee: (state, action) => {
      state.list.unshift({
        id: Date.now(),
        ...action.payload
      })
    },

    // 🔹 Delete employee
    deleteEmployee: (state, action) => {
      state.list = state.list.filter(
        (emp) => emp.id !== action.payload
      )
    }
  },
  extraReducers: (builder) => {
    builder
      /* ===== GET ALL ===== */
      .addCase(getEmployees.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      /* ===== GET BY ID ===== */
      .addCase(getEmployeeById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getEmployeeById.fulfilled, (state, action) => {
        state.loading = false
        state.selected = action.payload
      })
      .addCase(getEmployeeById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

/* =========================
   EXPORTS
========================= */

export const { addEmployee, deleteEmployee } = employeeSlice.actions
export default employeeSlice.reducer
