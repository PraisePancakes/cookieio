import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <div className="Game--Section-Cont px-[5rem] flex flex-col items-center gap-[20rem]">
        <h1 className="Game--Header w-full text-4xl ">CLICK AWAY...</h1>
        {count}
        <button
          onClick={handleCookieClick}
          className="Game--Click-Btn border px-8 py-2"
        >
          CLICK
        </button>
      </div>
    </div>
  );
};

export default GameComponent;
