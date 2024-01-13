import React from "react";
import './App.css'
import { Routes, Route, Link } from "react-router-dom"

import Home from "./components/Home"
import Blue from "./components/Blue"
import Red from "./components/Red"
import Green from "./components/Green"
import Magenta from "./components/Magenta"
import Orange from "./components/Orange"
import Pink from "./components/Pink"
import Violet from "./components/Violet"
import Black from "./components/Black"



function App() {

return (
  <div id="container">

    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/green">Green</Link>
      <Link to="/magenta">Magenta</Link>
      <Link to="/orange">Orange</Link>
      <Link to="/pink">Pink</Link>
      <Link to="/violet">Violet</Link>
      <Link to="/black">Black</Link>

    </div>    
    
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blue" element={<Blue/>}/>
        <Route path="/red" element={<Red/>}/>
        <Route path="/green" element={<Green/>}/>
        <Route path="/magenta" element={<Magenta/>}/>
        <Route path="/orange" element={<Orange/>}/>
        <Route path="/pink" element={<Pink/>}/>
        <Route path="/violet" element={<Violet/>}/>
        <Route path="/black" element={<Black/>}/>
      </Routes>
    </div>

  </div>
  

  );
  
}

export default App