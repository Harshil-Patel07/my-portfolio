"use client"
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { locales } from '../../../../lib/locales'
const RegisterForm = () => {
    const [loading,setLoading]=useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      phone: '',
      aboutMe: '',
      password: '',
      portfolioURL: '',
      githubURL: '',
      instagramURL: '',
      facebookURL: '',
      twitterURL: '',
      linkedInUrl: '',
      avatar: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(locales.INVALID_EMAIL_ADDRESS)
        .required(locales.EMAIL_IS_REQUIRED),
      fullName: Yup.string().required('Full name is required'),
      phone: Yup.string().required('Phone number is required'),
      aboutMe: Yup.string().required('About me is required'),
      password: Yup.string()
        .min(6, locales.PASSWORD_MIN_LENGTH)
        .required(locales.PASSWORD_IS_REQUIRED),
      portfolioURL: Yup.string().url('Invalid URL'),
      githubURL: Yup.string().url('Invalid URL'),
      instagramURL: Yup.string().url('Invalid URL'),
      facebookURL: Yup.string().url('Invalid URL'),
      twitterURL: Yup.string().url('Invalid URL'),
      linkedInUrl: Yup.string().url('Invalid URL'),
      avatar: Yup.mixed().required('Avatar is required'),
    }),
    onSubmit: async (values) => {
        try {
          setLoading(true);
      
          const formData = new FormData();
          Object.keys(values).forEach(key => {
            formData.append(key, values[key]);
          });
      
          const res = await fetch("http://localhost:4000/api/user/register", {
            method: 'POST',
            body: formData
          });
      
          const data = await res.json(); 
      
          console.log(data); 
      
          setLoading(false);
        } catch (error) {
          console.error("Error:", error);
          setLoading(false);
        }
      },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.fullName && formik.errors.fullName ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="aboutMe" className="block text-gray-700 font-semibold mb-2">About Me:</label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              className={`w-full border shadow-sm rounded-lg px-4 py-2 outline-none ${formik.touched.aboutMe && formik.errors.aboutMe ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.aboutMe}
            />
            {formik.touched.aboutMe && formik.errors.aboutMe ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.aboutMe}</div>
            ) : null}
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <label htmlFor="portfolioURL" className="block text-gray-700 font-semibold mb-2">Portfolio URL:</label>
            <input
              type="url"
              id="portfolioURL"
              name="portfolioURL"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.portfolioURL && formik.errors.portfolioURL ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.portfolioURL}
            />
            {formik.touched.portfolioURL && formik.errors.portfolioURL ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.portfolioURL}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="githubURL" className="block text-gray-700 font-semibold mb-2">GitHub URL:</label>
            <input
              type="url"
              id="githubURL"
              name="githubURL"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.githubURL && formik.errors.githubURL ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.githubURL}
            />
            {formik.touched.githubURL && formik.errors.githubURL ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.githubURL}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="instagramURL" className="block text-gray-700 font-semibold mb-2">Instagram URL:</label>
            <input
              type="url"
              id="instagramURL"
              name="instagramURL"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.instagramURL && formik.errors.instagramURL ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.instagramURL}
            />
            {formik.touched.instagramURL && formik.errors.instagramURL ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.instagramURL}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="facebookURL" className="block text-gray-700 font-semibold mb-2">Facebook URL:</label>
            <input
              type="url"
              id="facebookURL"
              name="facebookURL"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.facebookURL && formik.errors.facebookURL ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.facebookURL}
            />
            {formik.touched.facebookURL && formik.errors.facebookURL ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.facebookURL}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="twitterURL" className="block text-gray-700 font-semibold mb-2">Twitter URL:</label>
            <input
              type="url"
              id="twitterURL"
              name="twitterURL"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.twitterURL && formik.errors.twitterURL ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.twitterURL}
            />
            {formik.touched.twitterURL && formik.errors.twitterURL ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.twitterURL}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="linkedInUrl" className="block text-gray-700 font-semibold mb-2">LinkedIn URL:</label>
            <input
              type="url"
              id="linkedInUrl"
              name="linkedInUrl"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.linkedInUrl && formik.errors.linkedInUrl ? 'border-red-500' : 'focus:border-black'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.linkedInUrl}
            />
            {formik.touched.linkedInUrl && formik.errors.linkedInUrl ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.linkedInUrl}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="avatar" className="block text-gray-700 font-semibold mb-2">Avatar:</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className={`w-full border shadow-sm rounded-full px-4 py-2 outline-none ${formik.touched.avatar && formik.errors.avatar ? 'border-red-500' : 'focus:border-black'}`}
              onChange={(event) => {
                formik.setFieldValue("avatar", event.currentTarget?.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.avatar && formik.errors.avatar ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.avatar}</div>
            ) : null}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-full py-2 hover:bg-blue-600 transition duration-200">
          {loading? "Please Wait...": "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
