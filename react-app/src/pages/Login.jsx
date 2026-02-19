import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { loginSuccess } from "../features/auth/authSlice"

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
    // fake auth
    if (values.email === "admin@test.com" && values.password === "1234") {
      dispatch(loginSuccess({ email: values.email }))
      navigate("/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Login</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <Field name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>

      <p style={{ marginTop: 10 }}>
        Demo: <br />
        admin@test.com / 1234
      </p>
    </div>
  )
}

export default Login
