const mongoose = require('mongoose');

const AgentquizSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true,
    
  },
  question: {
    type: String,
    required: true, 
    unique: true,
  },
  options: {
    type: [String], 
    required: true,
    validate: {
      validator: function (arr) {
        return arr.length === 4; 
      },
    },
  },
  ans: {
    type: Number,
    required: true,
  },
});

const AgentQuizModel = mongoose.model('Agentquiz', AgentquizSchema);
module.exports = AgentQuizModel;
