import './App.css'
import './index.css'   
import { Routes, Route, Link } from "react-router-dom"

//import {} from "./components/red"
//import {} from "./components/blue"
//import {} from "./components/green"
//import {} from "./components/home"
//import {} from "./components/magenta"
//import {} from "./components/orange"
//import {} from "./components/pink"
//import {} from "./components/violet"

import {Red} from './components'





function App() {
console.log(Red);
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

    </div>    
    
    <div id="main-section">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/blue" element={<h1>Blue</h1>}/>
        <Route path="/red" element={<h1>Red</h1>}/>
        <Route path="/green" element={<h1>Green</h1>}/>
        <Route path="/magenta" element={<h1>Magenta</h1>}/>
        <Route path="/orange" element={<h1>Orange</h1>}/>
        <Route path="/pink" element={<h1>Pink</h1>}/>
        <Route path="/violet" element={<h1>Violet</h1>}/>
      </Routes>
    </div>

  </div>
  

  );
  
}

export default App