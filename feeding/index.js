import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar.js';
import './index.css';
 
class Feeding extends React.Component{
  handleClick(){
    console.log("handle the click");
  }
  render(){
    return (
      <div>
        <NavBar />
        <div className="Bottle Box">
          <h2>Bottle Entries</h2>
          <form className="inputs">
            <label>Ounces: </label>
            <input type="text"></input>
            <br></br>
            <br></br>
            <label>Day:</label>
            <input type="text"></input>
            <br></br>
            <br></br>
            <input type="submit" value="Record" onClick={this.handleClick}></input>
          </form>
        </div>
        <div className="Week Box">
          <h2>week</h2>
        </div>
        <div className="Breastfeed Box">
          <h2>Breastfeeding Entry</h2>
          <form className="inputs">
            <label>Minutes: </label>
            <input type="text"></input>
            <br></br>
            <br></br>
            <label>Day:</label>
            <input type="text"></input>
            <br></br>
            <br></br>
            <input type="submit" value="Record" onClick={this.handleClick}></input>
          </form>
        </div>
        <div className="Day Box">
          <h2>day</h2>
        </div>
      </div>
    );
  }
}
 
<Feeding />
 
ReactDOM.render(<Feeding />,document.getElementById('root'));