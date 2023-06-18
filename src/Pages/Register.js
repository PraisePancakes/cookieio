import React from 'react';

const Register = () => {
  return (
    <div className="REGISTER__CONTAINER relative flex flex-col items-center ">
      <div
        style={{ backgroundColor: '#7877E6' }}
        className="Top--Half-Box w-full h-[500px]"
      ></div>
      <div className="Register--Component relative h-[25rem] w-[22rem] bottom-[13rem] bg-white border flex flex-col items-center border-black">
        <h1 className="Register--Component-Header text-2xl mt-3">
          Create Your Account
        </h1>
        <form className="mt-3 flex flex-col items-center">
          <label className="text-xl font-thin">Whats Your Email? </label>
          <input
            style={{ borderColor: '#7877E6' }}
            className="border w-[18em] focus:outline-none px-5 mt-2"
            type="email"
            name="email"
          ></input>
          <label className="text-xl font-thin">Enter a Username </label>
          <input
            style={{ borderColor: '#7877E6' }}
            className="border w-[18em] focus:outline-none px-5 mt-2"
            type="username"
            name="username"
          ></input>
          <label className="text-xl font-thin">Enter a Password </label>
          <input
            style={{ borderColor: '#7877E6' }}
            className="border w-[18em] focus:outline-none px-5 mt-2"
            type="password"
            name="password"
          ></input>
        </form>
        <div className="relative w-full">
          <hr className="w-full border border-slate-200 mt-10 absolute"></hr>
          <h2 className="absolute left-[10rem] top-7 bg-white px-2">OR</h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
