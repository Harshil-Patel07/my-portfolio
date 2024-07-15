"use client"
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { locales } from '../../../../lib/locales'

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(locales.INVALID_EMAIL_ADDRESS)
        .required(locales.EMAIL_IS_REQUIRED),
      password: Yup.string()
        .min(6, locales.PASSWORD_MIN_LENGTH)
        .required(locales.PASSWORD_IS_REQUIRED),
    }),
    onSubmit: async (values) => {
        try {
        await fetch("http://localhost:4000/api/user/login", {
            method: 'POST',
            credentials:'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
        
   
        
        } catch (error) {
          console.log("Error:", error)
        }
      },
  });

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
