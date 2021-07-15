const user = require('../models/user')
const middleareAuth =(req,res,next)=>{

    //console.log(req.session.passport.user)
    if(req.session.passport.user){
        user.findOne({id:req.session.passport.user}).then((u)=>{
            if(u){
                req.user = u
                next();
                
            }
            else{
                res.send("error")
            }
        }).catch((err)=>{
           res.send("error"+err)
        })

    }
    else{
        res.send({err:"you are not authentication please login"})
    }
  
}

module.exports = middleareAuth