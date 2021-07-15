const mongoose = require('mongoose');

const userScheama = mongoose.Schema({

      id  : {
        type:String,
        required:true
      },
      displayName : {
        type:String,
        required:true
      },
      profile:{
        type:String
        
      }


} , {
    Collection:'user'
})

module.exports = mongoose.model('User',userScheama)