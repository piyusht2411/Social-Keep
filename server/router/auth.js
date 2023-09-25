const express = require('express');
const Router = express.Router();
const jwt = require('jsonwebtoken');
require('../Database/connection');
const User = require('../model/userSchema');
const bcrypt = require('bcrypt');
const authenticate  = require('../middleware/authenticate');
const cookies = require('cookie-parser');
Router.use(cookies());

Router.get('/', (req, resp) => {
    resp.send("hey welcome in the router");

});

//using promises
// Router.post('/register', (req,resp)=>{
// const {name, email, phone, work, password, cpassword} = req.body;
// if(!name || !email || !phone || !work || !password || !cpassword){
//     return resp.status(422).json({error: "Please filled the details properly"});
// }
// User.findOne({email:email}).then((userExist)=>{
//     if(userExist){
//         return resp.status(422).json({error: "Email already exits"});
//     }
//     const user = new User({name, email, phone, work, password, cpassword});
//     user.save().then(()=>{
//         resp.status(201).json({message:"user registered successfully"});
//     }).catch((err)=>{
//         resp.status(500).json({error:"Failed registered"})
//     })
// }).catch((err)=>{
//     console.log(err);
// })

// })

//using asnyc await
Router.post('/register', async (req, resp) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return resp.status(422).json({ error: "Please filled the details properly" });
    }
    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return resp.status(422).json({ error: "Email already exits" });
        }
        else if (password != cpassword) {
            return resp.status(422).json({ error: "Password and Confirm password does not match" });


        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });
            const userRegister = await user.save();
            if (userRegister) {
                resp.status(201).json({ message: "user registered successfully" });
            } else {
                resp.status(500).json({ error: "Failed registered" })

            }
        }



    } catch (err) {
        console.log(err);
    }


})

Router.post('/signin', async (req, resp) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return resp.status(400).json({ error: "Please fill the details" });
        }

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);

            resp.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!isMatch) {
                resp.status(400).json({ error: "Invalid Credientials" });

            } else {
                resp.json({ message: "user Sign in Succesfully" });
            }
        }
        else {
            resp.status(400).json({ error: "Invalid Credientials" });
        }
    }catch(err){
        console.log(err);
    }  
    
});
Router.get('/about',authenticate, (req,resp)=>{
    console.log('about');
    resp.send(req.rootUser);
}); 

module.exports = Router;