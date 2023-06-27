import React from 'react';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const username = decoded.username;

  function handleLogOut() {
    window.location.reload();
    localStorage.removeItem('token');
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
        <h1 className="Navbar--Title-Text ml-10 my-2 text-2xl flex-1">
          COOKIE<span className="Text--Color-Span text-violet-500">IO</span>
        </h1>
        <h1 className="Auth--Username my-2 flex-1 md:text-lg ">
          {username}'s Dashboard
        </h1>
        <ul className="Nav--Links-Ul md:flex hidden mr-[5rem] text-lg h-full justify-center">
          {navLinks.map((nav) => {
            return (
              <li key={nav.id} className="Nav--Links-List__Items">
                <Link to={nav.path}>
                  <button className="Nav--Links-Btn__Decor hover:bg-violet-700 hover:text-gray-200 transition-colors duration-500 h-full px-2">
                    {nav.title}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
        <button onClick={handleLogOut} className="Log--Out-Btn mr-10">
          LOG OUT
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
