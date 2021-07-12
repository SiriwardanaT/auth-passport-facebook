const mongoose = require('mongoose');

const userScheama = mongoose.Schema({

      facebookID  : {
        type:String,
        required:true
     }

} , {
    Collection:'user'
})

module.exports = mongoose.model('User',userScheama)