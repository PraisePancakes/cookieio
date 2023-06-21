import Register from './Pages/Register';
import React, { useState, useEffect } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

//All header have --main
//All Sub headers / p have --secondary
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

        <div className="w-full text-white mx-10">Footer</div>
      </div>
    </div>
  );
}

export default App;
