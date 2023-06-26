import React from 'react';
import LoginComponent from '../Components/LoginComponent';
import Leaderboards from '../Assets/leaderboard-icon-13749.png';
import Cookie from '../Assets/cookie-47942.png';
import Users from '../Assets/users.png';

const Login = () => {
  return (
    <div className="LOGIN__CONT relative max-w-full flex flex-col items-center ">
      <section
        style={{ backgroundColor: '#7877E6' }}
        className="Top--Half-Box w-full h-[500px]"
      >
        <h1
          className="text-white mt-5 py-1 px-10 text-5xl w-full"
          style={{
            backgroundColor: '#7877E6',
            fontFamily: 'var(--secondary-font)',
          }}
        >
          WELCOME TO COOKIE<span className="text-violet-200">IO</span>
        </h1>
        <span className="text-white px-16 text-xl">
          THE LARGEST{' '}
          <span className="text-violet-800 text-2xl"> COOKIE CLICKER </span>{' '}
          PLATFORM
        </span>
      </section>
      <LoginComponent />
      <section
        className="border-b border-t w-full h-[500px] text-white "
        style={{ backgroundColor: '#7877E6' }}
      >
        <h1 className=" text-7xl text-center mt-5">JOIN THE FUN</h1>
        <div className="Steps--Row grid grid-cols-3 gap-[2rem] w-full mt-8 ">
          <div className="Step--1-Col flex flex-col items-center text-center">
            <span className="text-4xl border rounded-full w-11 px-3 bg-violet-600">
              1
            </span>
            <h1 className="text-2xl underline">REGISTER</h1>
            <p className="w-[15rem] mt-2 indent-2 text-lg">
              Our system requires user registration to save the players data and
              ultimately make the experience as fun as possible for you.{' '}
              <span className="underline underline-offset-2">Register</span>{' '}
              your account first.
            </p>
            <img src={Users} alt="users" className="w-[7rem]"></img>
          </div>
          <div className="Step--2-Col flex flex-col items-center text-center">
            <span className="text-4xl border rounded-full w-11 px-3 bg-violet-600 ">
              2
            </span>
            <h1 className="text-2xl underline">LOGIN</h1>
            <p className="w-[15rem] mt-2 indent-2 text-lg">
              Login to play , see your stats , and view our leaderboards to
              compete!
            </p>
            <img
              src={Leaderboards}
              alt="leaderboards"
              className="w-[10rem] "
            ></img>
          </div>
          <div className="Step--3-Col flex flex-col items-center text-center">
            <span className="text-4xl border rounded-full w-11 px-3 bg-violet-600 ">
              3
            </span>
            <h1 className="text-2xl underline">PLAY</h1>
            <p className="w-[15rem] mt-2 indent-2 text-lg">
              CLICK CLICK AWAY...
            </p>
            <img src={Cookie} alt="cookie" className="w-[5rem] mt-5"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
