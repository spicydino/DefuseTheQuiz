import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Edit1 = () => {
  const [hidden, setHidden] = useState(false);
  const [questions, setQuestions] = useState([]);   
  const [add, setAdd] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);  
  

  
  useEffect(() => {
    fetch('http://localhost:3000/Agentquiz')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => console.log('Fetch failed, server not responding because: ', err));
  }, []);  

  
  const handleAdd = () => {
    setSelectedQuestion(null);
    setAdd(true);
  };

  
  const handleDelete = (id) => {
    fetch('http://localhost:3000/Agentquiz', {
      method: 'POST',   
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId: id }), 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete question');
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === 'ok') {
          setQuestions((prevQuestions) => prevQuestions.filter((q) => q._id !== id));
        } else {
          console.error('Failed to delete:', data.message);
        }
      })
      .catch((err) => console.log('Delete failed:', err));
  };
  
  
  
  const handleEdit = (question) => {
    setSelectedQuestion(question);
    setAdd(true);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div className="container">
      {add ? (
        <div>
          <h2>{selectedQuestion ? 'Edit Question' : 'Add New Question'}</h2>
          
        </div>
      ) : (
        <div>
          <h1>Quiz Questions</h1>
          {questions.map((question, index) => (
            <div key={question._id} className="questionlist">
              <h2>
                {index + 1}. {question.question}
              </h2>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(question._id)}
                style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}
              />
              <button onClick={() => handleEdit(question)}>Edit</button>
            </div>
          ))}
          <button onClick={handleAdd}>Add New Question</button>
        </div>
      )}
    </div>
  );
};

export default Edit1;
