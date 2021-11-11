import REACT, { Component } from 'react';
import REACTDOM from 'react-dom';
import MainCSS from './main.module.css';
import graph from './images/graph.png';
import helppic from './images/help1.png';


class Main extends Component{
    render(){
        return(
            <body style={{marginTop: "0px", width: "1350px", backgroundColor: "#03dbfc"}}>
                <script src="main_functions.js"></script>
                <h1 className={MainCSS.title}>BabyTracker</h1>
                <div className={MainCSS.navbar}>
                    <div className={MainCSS.help}>
                        <button className={MainCSS.helpbtn} onclick="displayHelp()" height="50" width="50"><img src={helppic} className={MainCSS.helpimg} height="50" width="50" alt="Help"/></button>
                        <div id="help" className={MainCSS.help_content}>
                            <p>
                                Thiis is text.
                            </p>
                        </div>
                    </div>
                    <button className={MainCSS.nav}>Bath</button>
                    <button className={MainCSS.nav}>Sleep</button>
                    <button className={MainCSS.nav}>Eating</button>
                    <button className={MainCSS.logout}>Log Out</button> 
                </div>
                <div style={{display: "flex", borderBottom: "2px solid grey", backgroundColor: "white"}}>
                    <div style={{width: "990px"}}>
                        <table>
                            <tr style={{display: "flex"}}>
                                <div style={{width: "400px"}}>
                                    <h1>Bath Overview</h1>
                                    <img src={graph} width="280" height="280" alt="no image"/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>Text for Summary</p>
                                </div>
                            </tr>
                            <tr style={{display: "flex"}}>
                                <div style={{width: "400px"}}>
                                    <h1>Sleeping Overview</h1>
                                    <img src={graph} width="280" height="280" alt="no image"/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>Text for Summary</p>
                                </div>
                            </tr>
                            <tr style={{display: "flex"}}>
                                <div style={{width: "400px"}}>
                                    <h1>Eating Overview</h1>
                                    <img src={graph} width="280" height="280" alt="no image"/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>Text for Summary</p>
                                </div>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <h1 style={{fontSize: "23px"}}>Date: 10/27/2021    Time: 4:51 AM</h1>
                        <h1 style={{fontSize: "23px"}}>Baby Name: namevalue</h1>
                        <h1 style={{fontSize: "23px"}}>Age: agevalue</h1>
                        <button className={MainCSS.makeapp}>Make Appointment</button>
                    </div>
                </div>
                <div style={{height: "60px", margin: "auto", backgroundColor: "white"}}>
                    <footer style={{textAlign: "center"}}>
                        Copyright <span>&copy;</span> 2021 Pro Programmers. All Rights Reserved.
                    </footer>
                </div>
            </body>
        );
    }
}


export const main_menu = <Main/>;