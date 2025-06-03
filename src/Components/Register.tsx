import "../index.css";
import { Fragment } from "react";


function Register() {
  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl text-center font-bold text-gray-600">
            Register
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-600"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label
                htmlFor="uname"
                className="block mb-1 text-sm font-medium text-gray-600"
              >
                Username:
              </label>
              <input
                type="text"
                id="uname"
                placeholder="Enter username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-600"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded-md transition duration-200"
            >
              Register
            </button>
          </form>
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/Login" className="text-red-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Register;
