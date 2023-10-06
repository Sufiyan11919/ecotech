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
        }
        const user = new User(request.body);
        user.save()
        .then(()=>{
            response.status(201).json({message: "user registered successfully"})
        }).catch((err)=>{
            response.status(500).json({error: "failed to register"})
        });
    }).catch((err) => {
        console.log(err);
    });

});

module.exports = router;