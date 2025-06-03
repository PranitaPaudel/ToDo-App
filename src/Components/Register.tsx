import "../index.css";
import { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateUsername = (username: string): boolean => {
    const regex = /^[A-Za-z][A-Za-z0-9_]*$/;
    return regex.test(username);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const handldeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format.");
      return;
    }

    if (!validateUsername(uname)) {
      toast.error(
        "Username must start with a letter and can contain only letters, numbers, and underscores."
      );
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    toast.success("Registered Successfully!");
  };
  return (
    <Fragment>
      <ToastContainer position="top-center" />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl text-center font-bold text-gray-600">
            Register
          </h2>
          <form className="space-y-4" onSubmit={handldeSubmit} method="">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-600"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
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
