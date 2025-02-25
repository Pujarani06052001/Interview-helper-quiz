import { useState, useEffect } from "react";
import "./Quiz.css"; 

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((data) => setQuizData(data));

    const timer = setInterval(() => {
      if (timerRunning) {
        setTimeTaken((prevTime) => prevTime + 1);
      }
    }, 1000);

    return () => clearInterval(timer); 
  }, [timerRunning]);

  const handleOptionClick = (questionId, option) => {
    if (!submitted) {
      setSelectedAnswers((prev) => ({ ...prev, [questionId]: option }));
    }
  };
  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
    setTimerRunning(false); 
    setShowModal(true);
  };

  const isSubmitDisabled = quizData.some(
    (question) => !selectedAnswers[question.id]
  );

  return (
    <div className="quiz-container">
      <h1>React Quiz</h1>
      <p className="timer">Time Taken: {Math.floor(timeTaken / 60)}m {timeTaken % 60}s</p>

      {quizData.map((item) => (
        <div key={item.id} className="quiz-question">
          <h3>{item.question}</h3>
          <ul>
            {item.options.map((option, index) => {
              let className = "quiz-option";
              if (submitted) {
                if (option === item.correctAnswer) {
                  className += " correct"; // Green for correct answers
                } else if (selectedAnswers[item.id] === option) {
                  className += " incorrect"; // Red for incorrect answers
                }
              } else if (selectedAnswers[item.id] === option) {
                className += " selected"; // Highlight selected option before submission
              }

              return (
                <li
                  key={index}
                  className={className}
                  onClick={() => handleOptionClick(item.id, option)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Disable submit button if not all questions have been answered */}
      {!submitted ? (
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={isSubmitDisabled} // Disable submit if there are unanswered questions
        >
          Submit
        </button>
      ) : null}

      {/* Modal Popup for Result */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Quiz Completed!</h2>
            <h3>Your Score: {score} / {quizData.length}</h3>
            <h3>Time Taken: {Math.floor(timeTaken / 60)} minutes {timeTaken % 60} seconds</h3>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
