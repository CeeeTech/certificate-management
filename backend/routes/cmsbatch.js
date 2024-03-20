const BATCH =require('../models/Batchmodel')
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:"Get all batch "})
})

router.get('/:id',(req,res)=>{
    res.json({mssg:"Get a signle batch"})
})

router.post('/',async (req,res)=>{
    const {courseName,courseId,description,duration} = req.body
    
    try{
      const cms = await BATCH.create({courseName,courseId,description,duration})
      res.status(200).json(cms)
    }catch(error){
        res.status(400).json({error:error.message})
    }
    // res.json({mssg:"post  a signle"})
})
router.delete('/:id',(req,res)=>{
    res.json({mssg:"delete  a signle"})
})


router.patch('/:id',(req,res)=>{
    res.json({mssg:"update  a signle"})
})


module.exports =router