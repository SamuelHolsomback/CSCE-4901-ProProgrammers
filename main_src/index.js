import REACT from 'react';
import REACTDOM from 'react-dom';
import {Main} from './Main.js';
import {AddChild} from './addchild.js';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';
REACTDOM.render(
<BrowserRouter>
<Main/>
<main>
    <Routes>
        <Route path="/home" element={<Main/>}/>
        <Route path="/home" element={<Main/>}/>
        <Route path="/addnewchild" element={<AddChild/>}/>
    </Routes>
</main>
</BrowserRouter>
    , document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
