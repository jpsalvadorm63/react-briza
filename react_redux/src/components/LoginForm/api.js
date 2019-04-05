import moment from "moment"

const API = {}

const delayms = 4

API.fetchComponentSignal = (componentName, version, number) => {
  const msg = `${moment(new Date()).format('YYYY-MM-DD hh:mm')}: ${componentName}, v${version} - ${number}`
  const length = (msg.length < 44)?44:(msg.length+8)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(msg + ' ' + '.'.repeat(length - msg.length))
    }, delayms)
  })
}

////////////////  Login Login API

const initialValues = {
  email: '',
  password: '',
  loggedIn: false
}

const email= "admin@gmail.com"
const password = "admin"
const _loginOnSubmit = (values, {setSubmitting, resetForm}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(values.password === password && values.email === email) {
        values = {...values, loggedIn:true}
        setSubmitting(false)
        resolve(values)
      } else {
        values = {...values, loggedIn:false}
        resetForm(values)
        reject("error: wrong password or email")
      }
    }, 40)
  })
}

const loginOnSubmit = (values, formik, ok, fails) => _loginOnSubmit(values, formik)
  .then(result => ok(result))
  .catch(result => fails(result))

const loginValidate = values => {
  let errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  return errors
}

API.LoginForm = {
  initialValues,
  onSubmit:loginOnSubmit,
  validate:loginValidate,
}

const _logoutOnSubmit = (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({values})
    }, 2)
  })
}

const logoutOnSubmit = (values, ok, fails) => _logoutOnSubmit(values)
  .then(result => ok(result))
  .catch(result => fails(result))

API.LogoutForm = {
  initialValues,
  onSubmit:logoutOnSubmit
}

export default API
