import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginComponent = () => {
  const DEFAULT_FORM = {
    username: '',
    password: '',
  };

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const [form, setForm] = useState(DEFAULT_FORM);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', form);
      setForm(DEFAULT_FORM);
      sessionStorage.setItem('token', response.data.token);
      setSuccess(response.data.message);
      window.location.reload();
      navigate('/home');
    } catch (error) {
      setError(error.response.data.message);
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
    <div className="Login--Component relative h-[30rem] w-[22rem]  bottom-[13rem] bg-white border flex flex-col items-center border-gray-500 rounded-md">
      <h1 className="Login--Component-Header text-2xl mt-3 text-stone-900">
        Log-in to Your Account
      </h1>
      {error && (
        <h1 className="Error--Message border border-red-300 text-red-700 px-5 text-lg mt-2 ">
          {error}
        </h1>
      )}
      {success && (
        <h1 className="Success--Message border border-green-300 text-green-500 px-5 text-lg mt-2 ">
          {success}
        </h1>
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-3 flex flex-col gap-5 items-center"
      >
        <input
          className="border w-[18em] focus:outline-none p-3 rounded-md mt-2 font-thin"
          type="username"
          placeholder="USERNAME"
          required
          name="username"
          value={form.username}
          onChange={handleChange}
        ></input>

        <input
          className="border w-[18em] focus:outline-none p-3 rounded-md mt-2 font-thin"
          type="password"
          placeholder="PASSWORD"
          required
          name="password"
          value={form.password}
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="w-full p-2 rounded-md border border-black px-2 mt-3 hover:text-white hover:bg-black transition-colors duration-200"
        >
          LOG-IN
        </button>
      </form>
      <h1>
        Dont have an account?{' '}
        <Link to="/register">
          <span className="underline text-gray-500">Register</span>
        </Link>
      </h1>
      <div className="relative w-full">
        <hr className="w-full border border-slate-200 mt-10 absolute"></hr>
        <h2 className="absolute left-[10rem] top-7 bg-white px-2">OR</h2>
      </div>
      {/*Implement Google Auth in future */}
    </div>
  );
};

export default LoginComponent;
