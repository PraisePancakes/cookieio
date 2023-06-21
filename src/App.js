import React, { useState, useEffect } from 'react';
import FooterComponent from './Components/FooterComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, Register } from './Pages/index';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  useEffect(() => {
    localStorage.getItem('token');
  }, []);

  return (
    <div className="App ">
      <div
        className=" BODY__CONTAINER w-full overflow-hidden relative"
        style={{ margin: 0, padding: 0 }}
      >
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/"></Navigate>}
          ></Route>
        </Routes>

        <div className="w-full text-white mx-10">
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
