import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const DEFAULT_FORM = {
    username: '',
    password: '',
  };
  const navigate = useNavigate();

  const [form, setForm] = useState(DEFAULT_FORM);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', form);
      setForm(DEFAULT_FORM);
      localStorage.setItem('token', response.data.token);
      window.location.reload();
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="LOGIN__CONTAINER relative flex flex-col items-center ">
      <div
        style={{ backgroundColor: '#7877E6' }}
        className="Top--Half-Box w-full h-[500px]"
      ></div>
      <div className="Login--Component relative h-[25rem] w-[22rem] bottom-[13rem] bg-white border flex flex-col items-center border-black">
        <h1 className="Login--Component-Header text-2xl mt-3">
          Log-in to Your Account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-3 flex flex-col items-center"
        >
          <label className="text-xl font-thin">Enter a Username </label>
          <input
            style={{ borderColor: '#7877E6' }}
            className="border w-[18em] focus:outline-none px-5 mt-2"
            type="username"
            required
            name="username"
            value={form.username}
            onChange={handleChange}
          ></input>
          <label className="text-xl font-thin">Enter a Password </label>
          <input
            style={{ borderColor: '#7877E6' }}
            className="border w-[18em] focus:outline-none px-5 mt-2"
            type="password"
            required
            name="password"
            value={form.password}
            onChange={handleChange}
          ></input>
          <button type="submit">LOG-IN</button>
        </form>
        <div className="relative w-full">
          <hr className="w-full border border-slate-200 mt-10 absolute"></hr>
          <h2 className="absolute left-[10rem] top-7 bg-white px-2">OR</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
