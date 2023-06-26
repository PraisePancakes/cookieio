import React from 'react';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = sessionStorage.getItem('token');
  const decoded = jwt_decode(token);
  const username = decoded.username;

  function handleLogOut() {
    window.location.reload();
    sessionStorage.removeItem('token');
  }

  const navLinks = [
    {
      title: 'Home',
      id: 1,
      path: '/home',
    },
    {
      title: 'Cookie Style',
      id: 2,
      path: '/cstyle',
    },
    {
      title: 'Your Stats',
      id: 3,
      path: '/stats',
    },
    {
      title: 'Upgrades',
      id: 4,
      path: '/upgrades',
    },
  ];
  return (
    <div>
      <nav className="NAVBAR__CONT w-full h-[50px] flex justify-center items-center bg-black text-white fixed z-1">
        <h1 className="ml-10 my-2 text-2xl flex-1">
          COOKIE<span className=" text-violet-500">IO</span>
        </h1>
        <h1 className="my-2 flex-1 md:text-lg ">{username}'s Dashboard</h1>
        <ul className="md:flex hidden mr-[5rem] text-lg h-full justify-center">
          {navLinks.map((nav) => {
            return (
              <li key={nav.id}>
                <Link to={nav.path}>
                  <button className="hover:bg-violet-700 hover:text-gray-200 transition-colors duration-500 h-full px-2">
                    {nav.title}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
        <button onClick={handleLogOut} className="mr-10">
          LOG OUT
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
