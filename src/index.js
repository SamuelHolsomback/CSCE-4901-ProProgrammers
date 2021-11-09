import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class LoginComponent extends Component {
  constructor(){
    super()
    this.state = {
      showLogin:true,
      showRegister:false
    }
  }
  //Handles switch between
  handleClick = () => {
    console.log('this is:', this);
    if(this.state.showLogin == false){
      this.setState({
        showLogin:true,
        showRegister:false
      })
    }
    else{
      this.setState({
        showLogin:false,
        showRegister:true
      })
    }
    
  }

  handleClick2 = () => {
   //Area where login button click is recognized
   //class's can be misleading, read plain text to identify components if confused
  }


  render(){
    
    return ( <div class="centered" > 
    { this.state.showLogin?
      <div id="LoginBox" class = "LoginCenter">
        <div class = "LogInTest">Log in</div>
        <hr class="Line"></hr>
        <div class="spacer">Space</div>
        <div class="UserNameTest">Username</div>
        <div class="UserNameTest">
        <input ></input>
        </div>
          <div class="spacer2">Space</div>
          <div class="UserNameTest">Password</div>
          <div class="UserNameTest">
          <input type="password" name="password"></input>
        </div>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">
        <button class="ButtonFormat" >Log In</button>
        <button class="ButtonFormat" onClick={this.handleClick2}>Register</button> 
        
        </div>
        
    
      </div>
      :null}
      {this.state.showRegister?
      <div id="LoginBox" class = "LoginCenter">
        <div class = "LogInTest">Register</div>
        <hr class="Line"></hr>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">Email</div>
        <div class="UserNameTest">
          <input ></input>
        </div>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">Username</div>
        <div class="UserNameTest">
          <input ></input>
        </div>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">Password</div>
        <div class="UserNameTest">
        <input type="password" name="password"></input>
        </div>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">
          <button class="ButtonFormat" >Register</button>
          <button class="ButtonFormat" onClick={this.handleClick}>Cancel</button>
        </div>
      </div>
  :null}
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
