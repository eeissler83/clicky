import React from "react";
import "./navbar.css";

const Navbar = () =>
        <nav className="navbar navbar-default navbar-fixed-top">
           <ul>
            <li className="itemLeft">Score: </li>
            <li className="itemCenter"></li>
            {/* <li className="itemRight">Score: {this.state.score}</li> */}
          </ul>
        </nav>
      
export default Navbar;