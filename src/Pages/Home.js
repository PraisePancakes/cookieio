import React from 'react';
import Navbar from '../Components/Navbar';
import GameComponent from '../Components/GameComponent';
import LeaderboardComponent from '../Components/LeaderboardComponent';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="HOME__PAGE_BODY-CONT pt-[4rem] h-[50rem] flex justify-center">
        <section className="Home--Section-Cont grid grid-cols-2 w-full ">
          <GameComponent />
          <div className="Leaderboard--Section-Cont border-l px-[5rem] text-4xl">
            <LeaderboardComponent />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
