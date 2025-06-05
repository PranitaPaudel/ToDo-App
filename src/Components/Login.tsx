import "../index.css";
import { Fragment, useState } from "react";
import Register from "../Components/Register";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (uname == "pranita" && password == "pranita123") {
      toast.success("Login Sucessfull!");
    } else {
      toast.error("Invalid credentials. Please try again!");
    }
  };

  return (
    <Fragment>
      <ToastContainer position="top-center"></ToastContainer>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl text-center font-bold text-gray-600">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit} method="">
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
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded-md transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/Register" className="text-red-500 hover:underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Login;
