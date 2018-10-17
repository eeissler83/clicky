import React, { Component } from "react";
import './App.css';
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Cops from "./cops.json";


//sets state to 0 or empty
class App extends Component {
  state = {
    Cops,
    clickedCops: [],
    score: 0
  };

//when you click on a card ... the cop is taken out of the array
  imageClick = event => {
    const currentCops = event.target.alt;
    const CopsAlreadyClicked =
      this.state.clickedCops.indexOf(currentCops) > -1;

//if you click on a cop that has already been selected, the game is reset and cards reordered
    if (CopsAlreadyClicked) {
      this.setState({
        cops: this.state.cops.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCops: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available cop your score is increased and cards reordered
    } else {
      this.setState(
        {
          cops: this.state.cops.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCops: this.state.clickedCops.concat(
            currentCops
          ),
          score: this.state.score + 1
        },
//if you get all 12 cops corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              cops: this.state.cops.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCops: [],
              score: 0
            });
          }
        }
      );
    }
  };



//the order of components to be rendered: navbar, jumbotron, cards, footer 
render() {
  return (
    <div>
      <Navbar 
        score={this.state.score}
      />
      <Jumbotron />
      <div className="wrapper">
        {this.state.cops.map(cops => (
          <Cards
            imageClick={this.imageClick}
            id={cops.id}
            key={cops.id}
            image={cops.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
}
export default App;
