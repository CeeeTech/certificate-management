const express = require('express')
const CMS = require('../models/studentmodel')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:"Get all"})
})


router.get('/:id',(req,res)=>{
    res.json({mssg:"Get a signle"})
})

router.post('/',async (req,res)=>{
    const {name,nic,dbd,email,address,contactNumber,course,batch} = req.body
    
    try{
      const cms = await CMS.create({name,nic,dbd,email,address,contactNumber,course,batch})
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