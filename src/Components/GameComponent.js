import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from '../Assets/cookie-23111.png';
import jwt_decode from 'jwt-decode';

const GameComponent = () => {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const userId = decoded.userId;

  const initialCount = localStorage.getItem(`clicks_${userId}`) || 0;
  const [count, setCount] = useState(Number(initialCount));

  const handleCookieClick = async () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const updateClicks = async () => {
      const res = await axios.patch(
        `http://localhost:3001/userClicks/${userId}`,
        {
          count,
        }
      );
      localStorage.setItem(`clicks_${userId}`, res.data.clicks);
    };
    updateClicks();
  }, [count, userId]);

  return (
    <div>
      <div className="Game--Section-Cont px-[5rem] flex flex-col items-center gap-[10rem]">
        <h1 className="Game--Header w-full text-4xl ">CLICK AWAY...</h1>
        <div className="flex flex-col items-center gap-5">
          <span className="text-3xl text-slate-200">COOKIES : {count}</span>
          <button onClick={handleCookieClick} className="Game--Click-Btn">
            <img className=" w-[15rem] hover:w-[25rem]" src={Cookie}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameComponent;
