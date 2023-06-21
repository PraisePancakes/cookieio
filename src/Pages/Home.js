import React from 'react';
import jwt_decode from 'jwt-decode';

const Home = () => {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  return <div>{decoded.username}</div>;
};

export default Home;
