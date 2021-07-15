const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express();
const passport = require('passport')
const strategy  = require('passport-facebook')
const session = require('express-session')
const fbauth = require('./routers/facebook-auth-router')
const gitauth = require('./routers/github-auth-router')
const FacebookStrergy = strategy.Strategy;
const mongoose = require('mongoose')
const cookei_session = require('cookie-session')


app.use(cors({origin:'http://localhost:3000',credentials:true}))
app.use(passport.initialize());
app.use(passport.session());
dotenv.config();


app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
//app.use(cookei_session({maxAge:24*60*60*1000,keys:['dfdfdfdfjkdjdkjfkdjkdk']}))

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());


//facebook auth
app.use('/',fbauth)

//githubauth
app.use('/',gitauth)

//mongodb connect
mongoose.connect(process.env.DB,
{useNewUrlParser:true,useUnifiedTopology:true},
(err,db)=>{
    if(!err){
      console.log("database connected")
    }
    else{
      console.log("database not connected")
    }
})

//create server
app.listen(process.env.PORT || 3001 , ()=>{
    console.log("server running in http://localhost:"+process.env.PORT)
})
