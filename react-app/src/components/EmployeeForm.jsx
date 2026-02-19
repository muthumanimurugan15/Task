import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const schema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  role: Yup.string().required("Required")
})

const EmployeeForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <Field name="email" placeholder="Email" />
        <Field name="role" placeholder="Role" />
        <button type="submit">Save</button>
      </Form>
    </Formik>
  )
}

export default EmployeeForm
