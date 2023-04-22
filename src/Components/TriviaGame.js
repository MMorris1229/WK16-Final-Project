import React, { useState } from "react";

function TriviaGame() {
  const [questions, setQuestions] = useState([
    {
      question: "What is the name of Beyonce's debut solo album?",
      options: ["Dangerously in Love", "Lemonade", "4", "B'Day"],
      answer: "Dangerously in Love",
    },
    {
      question: "What is the name of The Beatles' drummer?",
      options: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
      answer: "Ringo Starr",
    },
    {
      question: "Which band released the album 'Appetite for Destruction' in 1987?",
      options: ["Guns N' Roses", "Bon Jovi", "Metallica", "AC/DC"],
      answer: "Guns N' Roses",
    },
    {
      question: "Who is known as the King of Pop?",
      options: ["Michael Jackson", "Elvis Presley", "Frank Sinatra", "Prince"],
      answer: "Michael Jackson",
    },
    {
      question: "What rock band had a hit with the song 'Stairway to Heaven'?",
      options: ["Pink Floyd", "The Beatles", "Led Zeppelin", "The Rolling Stones"],
      answer: "Led Zeppelin",
    },
    {
      question: "What year was the album 'Thriller' by Michael Jackson released?",
      options: ["1982", "1984", "1986", "1988"],
      answer: "1982",
    },
    {
      question: "Who wrote and sang the hit song 'Hello'?",
      options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"],
      answer: "Adele",
    },
    {
      question: "What country music legend sang the hit song 'I Walk the Line'?",
      options: ["Johnny Cash", "Willie Nelson", "Merle Haggard", "Dolly Parton"],
      answer: "Johnny Cash",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetButtonClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Your Score: {score}</h2>
          <button id= 'answer-btn' onClick={handleResetButtonClick}>Play Again?</button>
        </div>
      ) : (
        <div>
          <h2 id= 'question'>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option) => (
            <button id= 'answer-btn' key={option} onClick={() => handleAnswerButtonClick(option)}>
              {option}
            </button>
          ))}
          <h3>
            Question {currentQuestion + 1} of {questions.length}
          </h3>
        </div>
      )}
    </div>
  );
}

export default TriviaGame;
