import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
  const DEFAULT_FORM = {
    email: '',
    username: '',
    password: '',
  };

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [form, setForm] = useState(DEFAULT_FORM);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', form);
      setForm(DEFAULT_FORM);
      setSuccess(response.data.message);
      navigate('/');
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
    <div className="Register--Component relative h-[30rem] w-[22rem]  bottom-[13rem] bg-white border flex flex-col items-center border-gray-500 rounded-md">
      <h1 className="Register--Component-Header text-2xl mt-3 text-stone-900">
        Register an Account
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
        className="Register--Form-Box mt-3 flex flex-col gap-5 items-center"
      >
        <input
          className="Email--Input-Box border w-[18em] focus:outline-none p-3 rounded-md mt-2 font-thin"
          type="email"
          placeholder="EMAIL"
          required
          name="email"
          value={form.email}
          onChange={handleChange}
        ></input>
        <input
          className="Username--Input-Box border w-[18em] focus:outline-none p-3 rounded-md mt-2 font-thin"
          type="username"
          placeholder="USERNAME"
          required
          name="username"
          value={form.username}
          onChange={handleChange}
        ></input>

        <input
          className="Password--Input-Box border w-[18em] focus:outline-none p-3 rounded-md mt-2 font-thin"
          type="password"
          placeholder="PASSWORD"
          required
          name="password"
          value={form.password}
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="Submit--Form-Btn w-full p-2 rounded-md border border-black px-2 mt-3 hover:text-white hover:bg-black transition-colors duration-200"
        >
          REGISTER
        </button>
      </form>
      <h1 className="Already--Link">
        Already have an account?{' '}
        <span className="Already--Link-Decor underline text-gray-500">
          Log In
        </span>
      </h1>
      <div className="OAuth--Separator relative w-full">
        <hr className="OAuth--Line-Hr w-full border border-slate-200 mt-10 absolute"></hr>
        <h2 className="OAuth--Option-Text absolute left-[10rem] top-7 bg-white px-2">
          OR
        </h2>
      </div>
      {/*Implement Google Auth in future */}
    </div>
  );
};

export default RegisterComponent;
