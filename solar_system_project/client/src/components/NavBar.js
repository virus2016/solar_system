import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <ul>
            <li>
                <Link to="/">Home</Link> 
            </li>
            <li>
                <Link to="/planets">Planets</Link> 
            </li>
            <li>
                <Link to="/moons">Moons</Link> 
            </li>
        </ul>
    )
}

export default NavBar;