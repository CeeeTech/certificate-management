require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({mssg:"welcome "})
});

app.listen(process.env.PORT, ()=>{
    console.log("welcome app ",process.env.PORT);
})