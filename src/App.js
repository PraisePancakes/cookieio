import Register from './Pages/Register';
import React, { useState, useEffect } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';

//All header have --main
//All Sub headers / p have --secondary
function App() {
  return (
    <div className="App ">
      <div
        className=" BODY__CONTAINER w-full overflow-hidden relative"
        style={{ margin: 0, padding: 0 }}
      >
        <Login />
        <div className="w-full text-white mx-10">Footer</div>
      </div>
    </div>
  );
}

export default App;
