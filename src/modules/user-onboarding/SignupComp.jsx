import React, { useState } from "react";
import NotificationToggle from "./utils/NotificationToggle";
import { useNavigate } from "react-router-dom";

const SignupComp = () => {
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:3000/v1/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          mobileNumber,
          password,
          confirmPassword,
        }),
      });
      const responseData = await response.json();
      if (responseData.error) {
        setError(responseData.error);
      }
      if (responseData.data) {
        setData(responseData.data);
        navigate("/log-in");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error ? (
        <NotificationToggle
          setError={setError}
          setData={setData}
          message={error}
          type="error"
        />
      ) : (
        ""
      )}
      {data && data.message ? (
        <NotificationToggle
          setData={setData}
          setError={setError}
          message={data.message}
          type="success"
        />
      ) : (
        ""
      )}

      <div className=" py-6 items-center justify-center">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: `url('https://kalaa-app-client.s3.eu-north-1.amazonaws.com/kalaFace.png')`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl text-blue-600 font-semibold text-gray-700 text-center">
              Kalakaar.com
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome's you</p>

            <p className="text-red-900">{message}</p>

            {/*  the form starts here */}

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-transparent text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile Number
              </label>
              <input
                className="bg-transparent text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="bg-transparent text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Re-enter Password
                </label>
              </div>
              <input
                className="bg-transparent text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button
                onClick={() => {
                  if (!email || !password || !confirmPassword) {
                    setMessage("Please fill all the required fields");
                    return;
                  }

                  if (password !== confirmPassword) {
                    setMessage("Password and Confirm Password must match.");
                    return;
                  }
                  handleSignUp(email, mobileNumber, password, confirmPassword);
                  if (data.message) {
                    window.location.href = "/sign-in";
                  }
                }}
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Signup
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="#" className="text-xs text-red-500 uppercase">
                or log in
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
            <a
              href="/sign-in"
              className="flex items-center bg-green-600 justify-center mt-4 text-white rounded-lg shadow-md hover:bg-green-500"
            >
              <h1 className="px-3 py-3  text-center text-white font-bold">
                Login
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupComp;
