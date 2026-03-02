import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { loginSuccess } from "../features/auth/authSlice"
import "../styles/login.css"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = {
    email: "",
    password: ""
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(4, "Min 4 chars").required("Required")
  })

  const onSubmit = (values) => {
    if (values.email === "admin@test.com" && values.password === "1234") {
      dispatch(loginSuccess({ email: values.email }))
      navigate("/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-group">
              <Field name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-text"
              />
            </div>

            <div className="form-group">
              <Field
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-text"
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </Form>
        </Formik>

        <p className="demo-text">
          Demo Login <br />
          <strong>admin@test.com</strong> / <strong>1234</strong>
        </p>
      </div>
    </div>
  )
}

export default Login

