import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import API from "./api";

const LoginForm = ({ok, fails}) => {
  const {validate, onSubmit, initialValues} = API.LoginForm

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, formik) => onSubmit(values, formik, ok, fails)}
      >
        {
          ({isSubmitting}) => (
            <Form>
              <Field type="email" name="email" style={{width:"240px"}}/>
              <ErrorMessage name="email" component="div" />
              <br/>
              <Field type="password" name="password" style={{width:"240px"}}/>
              <ErrorMessage name="password" component="div" />
              <br/>
              <button type="submit" disabled={isSubmitting}>LOGIN</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default LoginForm
