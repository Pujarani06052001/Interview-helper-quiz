import { useEffect, useState } from "react";
import "./Html.css";

const QuizHtml = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("/html.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const handleAnswerSelection = (questionIndex, answer) => {
    setSelectedAnswers(
      (prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        newScore += 1;
      }
    });

    setScore(newScore);
  };

  return (
    <div className="quiz-container">
      <h2>HTML Quiz</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} className="question-box">
            <strong className="question-text">{q.question}</strong>
            <div className="options">
              {q.options.map((option, idx) => {
                let optionClass = "";
                
                if (score !== null) {
                  if (option === q.correctAnswer) {
                    optionClass = "correct-answer"; // ✅ Green
                  } else if (selectedAnswers[index] === option) {
                    optionClass = "wrong-answer"; // ❌ Red
                  }
                }

                return (
                  <label key={idx} className={`option ${optionClass}`}>
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      onChange={() => handleAnswerSelection(index, option)}
                      disabled={score !== null}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-btn" disabled={score !== null}>
          Submit
        </button>
      </form>
      {score !== null && <h3 className="score">Your Score: {score}/{questions.length}</h3>}
    </div>
  );
};

export default QuizHtml;






