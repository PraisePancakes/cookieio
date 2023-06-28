import React from 'react';
import Navbar from '../Components/Navbar';
import jwt_decode from 'jwt-decode';

const Stats = () => {
  const userToken = localStorage.getItem('token');
  const userDecoded = jwt_decode(userToken);
  const userId = userDecoded.userId;
  const cookiesToken = localStorage.getItem(`clicks_${userId}`);

  return (
    <div>
      <Navbar />
      <div>
        <section className="pt-[5rem] px-[5rem] w-full flex flex-col items-center gap-[5rem]">
          <h1 className="text-center text-5xl font-bold">YOUR STATS</h1>
          <div className="flex flex-col text-4xl gap-10 items-center">
            <h2>
              <span className="text-slate-200">PLAYER :</span>{' '}
              {userDecoded.username}
            </h2>
            <h2>
              <span className="text-slate-200">CREATED :</span>{' '}
              {userDecoded.createdAt}{' '}
            </h2>
            <h2>
              <span className="text-slate-200">COOKIE COUNT :</span>{' '}
              {cookiesToken}{' '}
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stats;
