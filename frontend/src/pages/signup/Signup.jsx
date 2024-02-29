import { useState } from "react";
import GenderCheckboxes from "./GenderCheckboxes";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { Toaster } from "react-hot-toast";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submiiting", inputs);
    await signup(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-400">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-2">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              value={inputs.fullname}
              onChange={(evt) =>
                setInputs({ ...inputs, fullname: evt.target.value })
              }
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
              value={inputs.username}
              onChange={(evt) =>
                setInputs({ ...inputs, username: evt.target.value })
              }
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
              value={inputs.password}
              onChange={(evt) =>
                setInputs({ ...inputs, password: evt.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(evt) =>
                setInputs({ ...inputs, confirmPassword: evt.target.value })
              }
              className="w-full input input-bordered bg-neutral text-gray-300 h-10"
            />
          </div>
          <GenderCheckboxes
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm  hover:underline hover:text-blue-600 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm btn-neutral mt-4 h-10" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : 'Sign Up' }
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
