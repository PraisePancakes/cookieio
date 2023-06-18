import Register from './Pages/Register';
//All header have --main
//All Sub headers / p have --secondary
function App() {
  return (
    <div className="App ">
      <div
        className=" BODY__CONTAINER w-full overflow-hidden relative"
        style={{ margin: 0, padding: 0 }}
      >
        <Register />
        <div className="w-full text-white mx-10">Footer</div>
      </div>
    </div>
  );
}

export default App;
