const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser')
const app = express();
const passport = require('passport')
const strategy  = require('passport-facebook')
const FacebookStrergy = strategy.Strategy;
app.use(passport.initialize());
dotenv.config();

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
passport.use(
    new FacebookStrergy(
      {
        clientID:"399687848138961",
        clientSecret: "5e7b2289dfeeb875089f05c89bb00a7b",
        callbackURL: "/facebook",
        profileFields: ["email", "name"],
       
      },
      function(accessToken, refreshToken, profile, done) {
        const { email, first_name, last_name } = profile._json;
        const userData = {
          email,
          firstName: first_name,
          lastName: last_name
        };
        console.log(profile)
        done(null, profile);
      }
    )
);



//routers
app.get('/auth/facebook',passport.authenticate('facebook'));

app.get('/facebook',passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

app.get('/',(req,res)=>{
    res.send("sucessfully login")
})
app.get('/login',(req,res)=>{
    res.send("invalid login")
})






















//create server
app.listen(process.env.PORT || 3001 , ()=>{
    console.log("server running in http://localhost:"+process.env.PORT)
})
