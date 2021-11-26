/*Bohyun Kim, #301131832, COMP 229, Section 008*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//Enable Jwt

let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// Create the User Model instance

let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req,res,next)=>{
    res.render('index', {title:'Home', displayName: req.user? req.user.displayName:''});
}


module.exports.displayLoginPage = (req,res, next) =>{
    if (!req.user)
    
    {
        res.render('auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName:''

        })
        
    }

    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server err?
        if(err)
        {
            return next(err);
        }

        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if(err)
            {
                return next(err);
            }

            const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret,{
                expiresIn: 604800 //1 week
            });
        
            return res.redirect('/survey-list');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage =  (req,res,next) => {
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages : req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''

        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req,res,next) => {
    //instantiate a user object
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        displayName:req.body.displayName
    });

    User.register(newUser, req.body.password, (err)=>{
        if(err)
        {
            console.log("Error: Inserting New User")
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User User Already Exists!')
            }
            
            return res.render('auth/register', 
            {
                title: 'Register',
                messages:req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName:''
            });
        }

        else
        {


            return passport.authenticate('local')(req,res,() => {
                res.redirect('/survey-list')
            });
        }
    });
}

module.exports.performLogout = (req,res,next)=>{
    req.logout();
    res.redirect('/');
}


