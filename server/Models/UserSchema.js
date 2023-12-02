const mongoose =require('mongoose')

const UserDetails = new mongoose.Schema({
    Name: {type:String},
    Password: {type:String},
    Email:{type:String},
    cart:{type:Array},
    IsSignInWithGoogle:{type:Boolean,default:false}
   
})
const userData =mongoose.model("User",UserDetails)
module.exports = userData