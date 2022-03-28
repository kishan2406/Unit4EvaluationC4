const express = require("express")

const User = require("../models/user.models")

const generateToken = (user) => {

    return jwt.sign({user}, 'secretkey')

}

const register = async(req, res) =>{

    try{
         const user = await User.findOne({email: req.body.mail})
     
         if(user){
             return res.status(400).send({message: "Email is already exists"})
         }
         user = await User.create(req.body);

         const token = generateToken(user)

         return res.status(400).send("user", token)
    }catch(err){
        return res.status(400).send({message: message.err})
    }
}

const login = async(req, res) =>{

    try{
         const user = await User.findOne({email: req.body.mail})

         if(!user){
            return res.status(400).send({message: "Either Email or Password is Wrong"})
        }
        const match = User.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send({message: "Either Email or Password is Wrong"})
        }
        if(match){
            const token = generateToken(user)

            return res.status(200).send({user, token})
        }
     
    }catch(err){
        return res.status(400).send({message: message.err})
    }
}

module.exports = {register, login}
