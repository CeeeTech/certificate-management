// require('dotenv').config()

// const express = require('express')

// const app = express()

// const cmsRoutes = require('./routes/cmsStudent')

// app.get('/', (req, res) => {
//     res.json({mssg:"welcome "})
// });

// app.use('/api/crm',cmsRoutes)

// app.get

// app.listen(process.env.PORT, ()=>{
//     console.log("welcome app   ",process.env.PORT);
// })

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const cmsRoutes = require('./routes/cmsStudent')
const cmsbacthRoutes = require('./routes/cmsbatch')
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.json({mssg:"welcome keshana  "})
});
app.use(express.json());
app.use('/api/crm',cmsRoutes)
app.use('/api/cmsbatch', cmsbacthRoutes)

mongoose.connect(process.env.MONG_URL)
  .then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("connect  dB ",process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log(error);
  })

