import React from "react";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Temp from "./Components/Temp";
function App() {
  return (
    <div className="App">
    <Navbar title="Real_State" home="Home" about="HowWork" Agent="Agent" Contact="Contact"/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/HowWork" element={<HowWork/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Agent" element={<Agent/>}/>
      </Routes>
      </BrowserRouter> */}
      <Temp/>
    </div>
  );
}

export default App;
