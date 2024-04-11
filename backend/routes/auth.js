const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult} =require('express-validator');
const bcrypt = require('bcryptjs');


//create a user using post "/api/auth" doesnot require auth


router.post('/createuser',[
    body('email').isEmail(),
    body('name')
.isLength({min: 3}), body('password','password must be atleast 5 characters').isLength({min:5})],async (req,res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        }
        );
    }
    try{
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({error:"sorry a user with this email already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);
        user = await User.create({
            name : req.body.name,
            password : secPass,
            email : req.body.email
        })
        // .then(user =>res.json(user))
        // .catch(err=>{console.log(err)
        // res.json({error:"Username already exists",message: err.message})})
        res.json(user)
    }catch(error){
        console.error(error.message);
        res.status(500).send('some error occured');
    }
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    
    // res.send(req.body);
})


module.exports = router