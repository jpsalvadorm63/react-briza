# notes

## Formik

[Formik notes](https://jaredpalmer.com/formik/docs/overview)


1. According to our prophet Dan Abramov, form state is inherently ephemeral and local, so tracking it in Redux (or any kind of Flux library) is unnecessary
2. Redux-Login calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This is fine for small apps, but as your Redux app grows, input latency will continue to increase if you use Redux-Login.
3. Redux-Login is 22.5 kB minified gzipped (Formik is 12.7 kB)

### Installing

```
npm install formik --save
```
or

```
yarn add formik
```

or CDN

```
<script src="https://unpkg.com/formik/dist/formik.umd.production.js"></script>
```

```
import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
```
