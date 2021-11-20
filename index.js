const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');


app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'AstralSays1132000',
    database: 'babytrackerdb',
});

app.post('/register', (req, res)=> {

    const username = req.body.usernameSet;
    const password = req.body.passwordSet;

    db.query("INSERT INTO credentials (username, password) VALUES (?,?)", 
    [username, password], 
    (err, result) => {
        console.log(err);
    });
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM credentials WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {

        if (err) {
            res.send(err);
        }
           
        if (result.length > 0) {
            res.send(result)
        }
        else {
            res.send({message: "Wrong username/password combination"})
        }
    });
})

app.listen(5000, () => {
    console.log('running on port 5000');
});