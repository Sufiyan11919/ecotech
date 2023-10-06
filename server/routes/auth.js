const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
require('../config/connection')
const User = require('../models/user')
const jwt = require('jsonwebtoken');
router.get('/',(request, response)=>{
    response.send("hey")
});  

router.post('/register',(request, response)=>{
    // console.log(request.body);
    // console.log(request.body.name);
    // response.json({message: request.body.name});
    if(!request.body.name || !request.body.department || !request.body.email || !request.body.password || !request.body.confirmPassword){
        return response.status(422).json({error: "please fill all the fields"})
    }

    User.findOne({email: request.body.email})
    .then((result) => {
        if(result){
            return response.status(422).json({error: "email already exists"})
        }else if(request.body.password !== request.body.confirmPassword){
            return response.status(422).json({error: "password and confirm password should be same"})
        }else{
            const user = new User(request.body);
        user.save()
        .then(()=>{
            response.status(201).json({message: "user registered successfully"})
        }).catch((err)=>{
            response.status(500).json({error: "failed to register"})
        });
        }
        
    }).catch((err) => {
        console.log(err);
    });

});

//login route 
router.post('/signin', async(request, response)=>{
    try {
        const {email, password} = request.body;
        if(!email || !password){
            return response.status(400).json({error: "please fill the data"})
        }
        const userLogin = await User.findOne({email: email});
        if(userLogin){
            const validation = await bcrypt.compare(password, userLogin.password);
            const validationConfirm = await bcrypt.compare(password, userLogin.confirmPassword);
            const jwtToken = await userLogin.generateAuthToken();
            console.log(jwtToken);
            response.cookie("jwtoken", jwtToken, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if(!validation && !validationConfirm){
                response.status(400).json({error: "invalid credentials"})
            }else{
                response.json({message: "user signed in successfully"})
            }
        }else{
            response.status(400).json({error: "invalid credentials"})
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
