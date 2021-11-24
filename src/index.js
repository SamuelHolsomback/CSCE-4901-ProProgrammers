import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DayComponent from './day';
let items=[['Monday',0,0],['Tuesday',0,0],['Wednesday',0,0],['Thursday',0,0],['Friday',0,0],['Saturday',0,0],['Sunday',0,0]];
class LoginComponent extends Component {
  constructor(){
    super()
    this.state = {
      dayValue : 'Monday',
      wasteValue:'Solid',
      updateValue:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    console.log(this.state.wasteValue);
    console.log(this.state.dayValue);

    items.map((item,index)=>{
      if (item[0] == this.state.dayValue)
      {
        if(this.state.wasteValue=='Solid'){item[1]++}
        else{item[2]++}
        console.log(item[1])
        console.log(item[2])
      }
  })
  this.setState({ updateValue: true });
  this.setState({ updateValue: false});
    
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ dayValue: e.target.value });
  }
  handleChange2(e) {
    console.log(e.target.value);
    this.setState({ wasteValue: e.target.value });
  }
  render(){
    return ( 
    <div class="centered" > 
      <div id="LoginBox" class = "LoginCenter">
        <div class="TitleTest"> Data Entry </div>
        <hr class="Line"></hr>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
        <div class="TypeTest"> Select Waste Type</div>
        <hr class="Line2"></hr>
        <div class="TypeTest"> 
        <select name="dog-names" class="TypeTest" onChange={this.handleChange2}>
          <option value="Solid">Solid</option>
          <option value="Liquid">Liquid</option>
        </select>
        </div>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
        <div class="TypeTest"> Select Day </div>
        <hr class="Line2"></hr>
        <div class="TypeTest"> 
        <select name="dog-names" class="TypeTest" onChange={this.handleChange}>
          <option value="Monday" >Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        </div>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
        <div class="TypeTest"> 
        <button class="ButtonFormat2" onClick={this.handleClick}>Submit</button>
        </div> 
      </div>
  

      <div id="LoginBox" class = "LoginCenter">
        <div class="TitleTest"> Recorded Data </div>
        <hr class="Line"></hr>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
            {items.map((item,index)=>{
              return <DayComponent dayValue={item[0]} solidTimes={item[1]} liquidTimes={item[2]}/>
          })}
          
          
          
        
      </div>
    </div>
  
    )
  }
}

ReactDOM.render(
  <LoginComponent/>
  ,
  document.getElementById('root')
);
reportWebVitals();
