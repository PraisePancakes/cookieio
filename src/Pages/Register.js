import React from 'react';
import RegisterComponent from '../Components/RegisterComponent';

const Register = () => {
  return (
    <div className="REGISTER__CONT relative max-w-full flex flex-col items-center ">
      <section
        style={{ backgroundColor: '#7877E6' }}
        className="Top--Half-Box w-full h-[500px]"
      >
        <h1
          className="Register--Page-Title text-white mt-5 py-1 px-10 text-5xl w-full"
          style={{
            backgroundColor: '#7877E6',
            fontFamily: 'var(--secondary-font)',
          }}
        >
          WELCOME TO COOKIE
          <span className="Text--Color-Span text-violet-200">IO</span>
        </h1>
        <span className="Text--Size-Span text-white px-16 text-xl">
          THE LARGEST{' '}
          <span className="Text--Color-Span text-violet-800 text-2xl">
            {' '}
            COOKIE CLICKER{' '}
          </span>{' '}
          PLATFORM
        </span>
      </section>
      <RegisterComponent />
    </div>
  );
};

export default Register;
