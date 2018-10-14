import React, {Component} from "react";
import "./navbar.css";

const Navbar = () =>
        <nav className="navbar navbar-default navbar-fixed-top">
           <ul>
            <li className="itemLeft">Test Your Memory</li>
            <li className="itemCenter"></li>
            {/* <li className="itemRight">Score: {this.props.score}</li> */}
          </ul>
        </nav>
      
export default Navbar;