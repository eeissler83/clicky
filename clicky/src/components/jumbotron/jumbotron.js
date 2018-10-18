import React from 'react';
import "./jumbotron.css";


const jumbotronStyle = {
  paddingBottom: '150px',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  height: "240px"

}

const Jumbotron = () =>
      <div id="main" style={jumbotronStyle}>
        <div className="container">
          <h1>Paradise PD</h1>
          {/* <h2>Memory Game</h2> */}
          <h4>Click on an image to earn points, but don't click on any more than once!</h4>
        </div>
       </div>
export default Jumbotron;