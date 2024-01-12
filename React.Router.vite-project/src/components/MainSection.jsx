import React from "react";
import {Routes, Route} from "react-router-dom"

import Home from "./components/Home"
import Blue from "./components/Blue"
import Red from "./components/Red"
import Green from "./components/Green"
import Magenta from "./components/Magenta"
import Orange from "./components/Orange"
import Pink from "./components/Pink"
import Violet from "./components/Violet"
import Black from "./components/Black"

function MainSection () {
    
    return (

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

    );

}

export default MainSection;
