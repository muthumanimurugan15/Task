import axios from "axios"

const API_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchEmployees = () => axios.get("https://jsonplaceholder.typicode.com/users")
export const fetchEmployeeById = (id) =>
  axios.get(`${API_URL}/${id}`)
