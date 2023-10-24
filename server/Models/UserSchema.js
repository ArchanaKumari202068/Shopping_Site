const mongoose =require('mongoose')

const UserDetails = mongoose.Schema({
    Name: {type:String},
    Password: {type:String},
    Email:{type:String}
})
const userData =mongoose.model("User",UserDetails)

module.exports = userData