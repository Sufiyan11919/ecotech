const express = require('express');
const router = express.Router();
require('../config/connection')
const User = require('../models/user')
router.get('/',(request, response)=>{
    response.send("hey")
});  

router.post('/signup',(request, response)=>{
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

router.post('/signin',(request, response)=>{
    const {email, password} = request.body;
    if(!email || !password){
        return response.status(422).json({error: "please fill all the fields"})
    }
    User.findOne({email: email})
    .then((result) => {
        if(!result){
            return response.status(422).json({error: "invalid email or password"})
        }
        if(result.password === password){
            return response.status(201).json({message: "user signed in successfully"})
        }else{
            return response.status(422).json({error: "invalid email or password"})
        }
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;
