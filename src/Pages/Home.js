import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import jwt_decode from 'jwt-decode';

const Home = () => {
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
      <Navbar />
      <section className="HOME__PAGE_BODY-CONT pt-[4rem] h-[50rem] flex justify-center">
        <div className="grid grid-cols-2 w-full ">
          <div className=" px-[5rem] flex flex-col items-center gap-[20rem]">
            <h1 className="w-full text-4xl ">CLICK AWAY...</h1>
            {count}
            <button onClick={handleCookieClick} className="border px-8 py-2">
              CLICK
            </button>
          </div>
          <div className="border-l px-[5rem] text-4xl">LEADERBOARDS</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
