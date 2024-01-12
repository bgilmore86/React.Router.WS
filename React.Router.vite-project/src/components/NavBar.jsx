import React from "react";
import {Link} from "react-router-dom"

function Navbar() {

    return ( 
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
    )
}

export default Navbar;
