const express = require('express');
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const AgentQuizModel = require('./models/Quiz'); 

const cors = require('cors');
const { default: dbConnect } = require('./database/db');
const quizRouter = require('./routes/quiz');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello, World!");
});

app.use(cors());
app.use(express.json());
app.use('/Login', loginRoute);
app.use('/', signupRoute);
app.use('/', quizRouter);
app.use('/Agentquiz', quizRouter);
app.use('/Mapquiz', quizRouter);
app.use('/Triviaquiz', quizRouter);
console.log('Quiz router set up correctly');

app.post('/Agentquiz', async (req, res) => {
  const { questionId } = req.body; 
  if (!questionId) {
    return res.status(400).json({ status: 'error', message: 'Question ID not provided' });
  }

  try {
    const result = await AgentQuizModel.deleteOne({ _id: questionId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ status: 'error', message: 'Question not found' });
    }

    res.status(200).json({ status: 'ok', message: 'Question deleted successfully' });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ status: 'error', message: 'Failed to delete question' });
  }
});



app.listen(3000, () => {
  dbConnect();
  console.log("Server started at port 3000");
});
