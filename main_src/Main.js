import REACT, { Component } from 'react';
import REACTDOM from 'react-dom';
import './index.css';
import graph from './images/graph.png';

const ss = {
    display: "flex",
    marginleft: "50px"
}

class Main extends Component{
    render(){
        return(
            <div style={{margin: "auto", width: "1000px"}}>
                <h1 style={{textAlign: "center", borderStyle: "solid"}}>Title</h1>
                <div style={{display: "flex", margin: "auto", borderStyle: "solid"}}>
                    <button>HELP</button>
                    <button>Bath</button>
                    <button>Sleep</button>
                    <button>Eating</button>
                    <button>Log Out</button>
                </div>
                <div style={{display: "flex", borderStyle: "solid"}}>
                    <button style={{height: "50px"}}>Make Appointment</button>
                    <h1 style={{textAlign: "center", marginLeft: "100px"}}>Date: 10/27/2021    Time: 4:51 AM</h1>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{borderStyle: "solid"}}>
                        <table>
                            <tr style={{display: "flex"}}>
                                <div><h1>Bath</h1><img src={graph} width="100" height="100" alt="no image"/></div>
                                <div><h1>Summary</h1>
                                <p>Text for Summary</p></div>
                            </tr>
                            <tr style={{display: "flex"}}>
                                <div><h1>Sleeping</h1><img src={graph} width="100" height="100" alt="no image"/></div>
                                <div><h1>Summary</h1>
                                <p>Text for Summary</p></div>
                            </tr>
                            <tr style={{display: "flex"}}>
                                <div><h1>Eating</h1><img src={graph} width="100" height="100" alt="no image"/></div>
                                <div><h1>Summary</h1>
                                <p>Text for Summary</p></div>
                            </tr>
                        </table>
                    </div>
                    <div style={{borderStyle: "solid"}}>
                        <h1>Baby Name: namevalue</h1>
                        <h1>Age: agevalue</h1>
                    </div>
                </div>
            </div>
        );
    }
}


export const main_menu = <Main/>;