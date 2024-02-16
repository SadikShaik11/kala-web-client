import React from "react";

const SigninComp = () => {
  return (
    <div>
      <div className="text-mono-500 py-6 items-center justify-center">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: `url('https://kalaa-app-client.s3.eu-north-1.amazonaws.com/kalaFace.png')`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl text-blue-600 font-semibold text-black text-center">
              Kalakaar.com
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Welcome's you back!
            </p>

            {/* <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or login with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div> */}
            <div className="mt-4">
              <label className="block text-black text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-transparent text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-black text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-transparent text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Login
              </button>
            </div>
            <a
              href="/"
              className="flex items-center bg-green-600 justify-center mt-4 text-white rounded-lg shadow-md hover:bg-green-500"
            >
              <h1 className="px-3 py-3  text-center text-white font-bold">
                Create New Account
              </h1>
            </a>
            {/* <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs text-red-500 uppercase">
              or sign up
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div> */}

            <div
              className="hidden xs:block lg:w-1/2 bg-cover"
              style={{
                backgroundImage: `url('https://kalaa-app-client.s3.eu-north-1.amazonaws.com/kalaFace.png')`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninComp;