import React from 'react'
import { FC } from "react";


const Register: FC = () => {
    return (
<>
<form className="w-full max-w-md mx-auto my-10 p-6 bg-[#0077b6] rounded-lg shadow-lg animate__animated animate__fadeIn">
  <h2 className="text-xl font-bold mb-5 text-white">Register for an Account</h2>
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
      Name
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      type="text"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="company">
      Company Name
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="company"
      type="text"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
      Email Address
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      required
    />
  </div>
  <div className="mb-6">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
      Password
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      type="password"
      placeholder="Password"
      required
    />
  </div>
  <div className='flex justify-between'>
    <button
      className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
      type="submit"
    >
      Register
    </button>
    <a className="inline-block align-baseline font-bold text-sm text-white hover:text-blue-200 transition duration-300" href="#">
      Terms & Conditions
    </a>
  </div>
</form>

</>


    )}
export default Register;