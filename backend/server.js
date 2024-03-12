require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({mssg:"keshana hi "})
});

app.listen(process.env.PORT, ()=>{
    console.log("listen app",process.env.PORT);
})