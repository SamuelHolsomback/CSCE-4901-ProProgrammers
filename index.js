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

app.post('/get-bathroom', (req, res)=> {
    const baby = req.body.babyName;

    db.query("SELECT * FROM restroom WHERE Baby = ?",
    [baby],
    (err, result) => {
        if (result.length > 0) {
            res.send(result)
        }
        else {
            res.send({message: "No prior log entries!"})
        }
    });
})

app.post('/bathroom', (req, res)=> {

    const mondaySValue = req.body.mondaySolidSet;
    const tuesdaySValue = req.body.tuesdaySolidSet;
    const wednesdaySValue = req.body.wednesdaySolidSet;
    const thursdaySValue = req.body.thursdaySolidSet;
    const fridaySValue = req.body.fridaySolidSet;
    const saturdaySValue = req.body.saturdaySolidSet;
    const sundaySValue = req.body.sundaySolidSet;
    const mondayLValue = req.body.mondayLiquidSet;
    const tuesdayLValue = req.body.tuesdayLiquidSet;
    const wednesdayLValue = req.body.wednesdayLiquidSet;
    const thursdayLValue = req.body.thursdayLiquidSet;
    const fridayLValue = req.body.fridayLiquidSet;
    const saturdayLValue = req.body.saturdayLiquidSet;
    const sundayLValue = req.body.sundayLiquidSet;
    //console.log(value)

    db.query("UPDATE restroom SET Monday_Solid = ?, Tuesday_Solid = ?, Wednesday_Solid = ?, Thursday_Solid = ?, Friday_Solid = ?, Saturday_Solid = ?, Sunday_Solid = ?, Monday_Liquid = ?, Tuesday_Liquid = ?, Wednesday_Liquid = ?, Thursday_Liquid = ?, Friday_Liquid = ?, Saturday_Liquid = ?, Sunday_Liquid = ? WHERE Baby = 'Test'", 
    [mondaySValue, tuesdaySValue, wednesdaySValue, thursdaySValue, fridaySValue, saturdaySValue, sundaySValue, mondayLValue, tuesdayLValue, wednesdayLValue, thursdayLValue, fridayLValue, saturdayLValue, sundayLValue], 
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