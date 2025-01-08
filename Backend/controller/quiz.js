const AgentQuizModel = require('../models/Quiz');  

const getQuiz = async (req, res) => {
  try {
    const questions = await AgentQuizModel.find();  
    res.status(200).json(questions);  
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    res.status(500).json({ error: 'Server error, data fetch failed' });
  }
};

module.exports = { getQuiz };
