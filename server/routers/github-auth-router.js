const passport = require('passport')
const express = require('express');
const User = require('../models/user'); 
const GitHubStrategy = require('passport-github').Strategy
const app = express.Router();
passport.serializeUser(function(user,cb){
      if(user){
          cb(null,user.id)
      }
      else{
        cb("error",null)
      }
      
})
passport.deserializeUser(function(gitid,cb){
      if(gitid){
        User.findOne({id:gitid}).then((Authuser)=>{
            cb(null,Authuser)
        }).catch((err)=>{
            cb(err,null)
        })
       
      }
})

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUBID,
    clientSecret:process.env.GITHUBIDSECRET,
    callbackURL: process.env.GITHUBID_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    //user.findOrCreate({ id : profile.id }, function (err, user) {
      //return cb(err, user);
    //});
    cb(null,profile)
  }
));

//routers
app.get('/auth/github',passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login'}),
  function(req, res) {

         User.findOne({id:req.user.id}).then((existuser)=>{
                if(existuser){
                     console.log(req.user)
                     const profile = req.user.photos[0].value
                     console.log(profile)
              
                      res.redirect('http://localhost:3000/my')
                }
                else{
                    
                    const id = req.user.id 
                    const displayName = req.user.username
                    const profile = req.user.photos[0].value
                    console.log(profile)
              
                    const newuser = {id,displayName,profile};
                    User.create(newuser).then((registeruser)=>{
                           if(registeruser){
                              res.redirect('/my')
                           }
                           else{
                               res.redirect('http://localhost:3000/login')
                           }
                    })
                    .catch((err)=>{
                        res.send("err"+err)
                    })   
                }
         }).catch((err)=>{
            res.redirect('http://localhost:3000/login')
         })

        
          
      
   
});
app.get('/private',(req,res)=>{
        console.log(req)
})

module.exports = app