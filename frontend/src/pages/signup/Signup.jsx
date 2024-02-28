import React from 'react'
import GenderCheckboxes from './GenderCheckboxes';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-400">ChatApp</span>
        </h1>

        <form className='mt-2'>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="w-full input input-bordered bg-neutral text-gray-300 h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered bg-neutral text-gray-300 h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered bg-neutral text-gray-300 h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered bg-neutral text-gray-300 h-10"
            />
          </div>
          <GenderCheckboxes />
          <a
            href="/signup"
            className="text-sm  hover:underline hover:text-blue-600 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm btn-neutral mt-4 h-10">Sign Up</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Signup;