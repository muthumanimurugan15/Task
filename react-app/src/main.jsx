import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App.jsx"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
          <ToastContainer position="top-right" autoClose={2000} />

    </Provider>
  </React.StrictMode>
)
