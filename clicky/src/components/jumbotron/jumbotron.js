import React from 'react';
import "./jumbotron.css";


const jumbotronStyle = {
  paddingBottom: '150px',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  height: "300px"

}

const Jumbotron = () =>
      <div className="card-panel grey lighten-2" style={jumbotronStyle}>
        <div className="container">
          <h1>Paradise PD</h1>
          <h2>Clicky Game!</h2>
          <h5>Click on an image to earn points, but don't click on any more than once!</h5>
        </div>
       </div>
export default Jumbotron;