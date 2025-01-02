const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require:true,
        unique: true
    },
    email:{
        type: String,
        require:true,
        unique: true
    },
    password:{
        type: String,
        require:true,
    },
    Score:{
        type: Number,
        default: 0,
        required:true
    }
    
    
})

const userModel = mongoose.model('my_user',userSchema);
module.exports = userModel;