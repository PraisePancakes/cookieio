import Register from './Pages/Register';
import React from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';

//All header have --main
//All Sub headers / p have --secondary
function App() {
  return (
    <div className="App ">
      <div
        className=" BODY__CONTAINER w-full overflow-hidden relative"
        style={{ margin: 0, padding: 0 }}
      >
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>

        <div className="w-full text-white mx-10">Footer</div>
      </div>
    </div>
  );
}

export default App;
