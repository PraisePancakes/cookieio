import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeaderboardComponent = () => {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const list = await axios.get('http://localhost:3001/leaderboards');
        const updatedListUsers = list.data.map((user) => ({
          ...user,
        }));
        setListUsers(updatedListUsers);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const sortedUsers = [...listUsers].sort((a, b) => b.clicks - a.clicks);

  return (
    <div>
      <h1 className="Leaderboards--Header">LEADERBOARDS</h1>
      <section className="Leaderboards--Data--Cont flex gap-[5rem] text-white mt-2">
        <ul className="Players--Ul">
          <h1 className="Players--Header md:text-xl text-sm underline underline-offset-2">
            Players
          </h1>
          {sortedUsers.map((user) => (
            <li key={user._id} className="Players--List-Items py-1">
              {user.username}
            </li>
          ))}
        </ul>
        <ul className="Clicks--Ul">
          <h1 className="Clicks--Header md:text-xl text-sm underline underline-offset-2">
            Clicks
          </h1>
          {sortedUsers.map((user) => (
            <li key={user._id} className="Clicks--List-Items py-1">
              {user.clicks === 0 ? 0 : user.clicks - 1}
            </li>
          ))}
        </ul>
        <ul className="Ranks--Ul">
          <h1 className="Ranks--Header md:text-xl text-sm underline underline-offset-2">
            Rank
          </h1>
          {sortedUsers.map((user) => (
            <li key={user._id} className="Ranks--List-Items py-1">
              {sortedUsers.indexOf(user) + 1}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LeaderboardComponent;
