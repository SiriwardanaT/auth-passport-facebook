const passport = require('passport')
const strategy  = require('passport-facebook')
const FacebookStrergy = strategy.Strategy;
const express = require('express')
const auth = express.Router();
const user = require('../models/user')
const dotenv = require('dotenv');
const middleareAuth = require('../middleware/auth');


dotenv.config();


passport.use(
    new FacebookStrergy(
      {
        clientID:process.env.APPID,
        clientSecret:process.env.APPSECRET,
        callbackURL: process.env.CALLBACKURL,
        profileFields: ['id', 'displayName', 'photos', 'email']
       
      },
      function(accessToken, refreshToken, profile, done) {
        console.log("called")
        done(null, profile);
      }
    )
);

//routers
auth.get('/auth/facebook',passport.authenticate('facebook'));

auth.get(process.env.CALLBACKURL,passport.authenticate('facebook', { failureRedirect: '/login'}),

  function(req, res) {
    //console.log(req)
    //check already register user
    user.findOne({id:req.user.id}).then((users)=>{
            
        if(users){
          //console.log(req.user)
          //const profile = req.user.photos[0].value;
          //console.log(profile)
            //if user already exist no registration and redirect to home page
           //res.json({"auth":true,"user":req.user.displayName,"id":req.user.id,"photos":req.user.photos[0].value})
           res.redirect('http://localhost:3000/my')
            
        }else{
            
            //user must be added to the database
            const {id,displayName} = req.user;
            const profile = req.user.photos[0].value
            newUser = {id,displayName,profile}
            
            user.create(newUser).then((registerUser)=>{
              if(registerUser){
                res.redirect('http://localhost:3000/my')
               // res.json({"auth":true,"user":req.user.displayName,"id":req.user.id,"photos":req.user.photos[0].value})
              }
              else{
                //res.json({"auth":false})
              }
             
            }).catch((err)=>{
                res.json(err)

            })

        }


    }).catch((err)=>{
        res.send("err :"+err)
    })
});

passport.serializeUser(function(user, done) {
  console.log("serialization "+ user.id)
  done(null, user.id);
});

passport.deserializeUser(function(Uid, done) {
   //console.log("id"+Uid)
   user.findOne({id :Uid}).then((u)=>{
   //console.log("deserilization : "+u.id)
    done(null, u);
   }).catch((err)=>{
     console.log(err)
    done(err, null);
   })
   
});

auth.get('/',(req,res)=>{

  
    
})
auth.get('/login',(req,res)=>{
    res.send("invalid login")
})

auth.get('/my',middleareAuth,(req,res)=>{
      res.send(req.user)
  
})




module.exports = auth