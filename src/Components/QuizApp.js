import React, { useEffect, useMemo, useState } from "react";
import Quiz from "./Quiz";
import Timer from "./Timer";
import Start from "./Start";

function App() {
  const [user, setUser] = useState(null);
  const [questionNum, setQuestionNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const Data = [
    {
      id: 1,
      question: " Who is the Father of our Nation?",
      answers: [
        {
          text: "Dr.B.R.Ambedkar",
          correct: false,
        },
        {
          text: "Mahatma Gandhi",
          correct: true,
        },
        {
          text: "Jawaharlal Nehru",
          correct: false,
        },
        {
          text: "Bhagat Singh",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who was the first President of India?",
      answers: [
        {
          text: "Dr. Rajendra Prasad",
          correct: true,
        },
        {
          text: "Dr. B. R. Ambedkar",
          correct: false,
        },
        {
          text: "Jawaharlal Nehru",
          correct: false,
        },
        {
          text: "Mahatma Gandhi",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Giddha is the folk dance of?",
      answers: [
        {
          text: "Gujarat",
          correct: false,
        },
        {
          text: "Maharashtra",
          correct: false,
        },
        {
          text: "Rajasthan",
          correct: false,
        },
        {
          text: "Punjab",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What country is the statue of liberty in?",
      answers: [
        {
          text: "United States",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "England",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which animal has hump on its back?",
      answers: [
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "Camel",
          correct: true,
        },
        {
          text: "Lion",
          correct: false,
        },
        {
          text: "Tiger",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Name the game which is played with bat, ball and wicket?",
      answers: [
        {
          text: "Cricket",
          correct: true,
        },
        {
          text: "Tennis",
          correct: false,
        },
        {
          text: "Basketball",
          correct: false,
        },
        {
          text: "Golf",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Fastest animal on earth is?",
      answers: [
        {
          text: "Lion",
          correct: false,
        },
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "Cheetah",
          correct: true,
        },
        {
          text: "Monkey",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "A figure with 8 sides is called?",
      answers: [
        {
          text: "Nonagon",
          correct: false,
        },
        {
          text: "Decagon",
          correct: false,
        },
        {
          text: "Hexagon",
          correct: false,
        },
        {
          text: "Octagon",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "A figure with 8 sides is called?",
      answers: [
        {
          text: "Nonagon",
          correct: false,
        },
        {
          text: "Decagon",
          correct: false,
        },
        {
          text: "Hexagon",
          correct: false,
        },
        {
          text: "Octagon",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Who wrote the National Anthem – Jana Gana Mana?",
      answers: [
        {
          text: "Mahatma Gandhi",
          correct: false,
        },
        {
          text: "Rabindranath Tagore",
          correct: true,
        },
        {
          text: "Jawaharlal Nehru",
          correct: false,
        },
        {
          text: "Sardar Vallabhbhai Patel",
          correct: false,
        },
      ],
    },
  ];
  const Money = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNum > 1 &&
      setEarned(Money.find((m) => m.id === questionNum - 1).amount);
  }, [Money, questionNum]);

  return (
    <div className="App">
      {user ? (
        <>
          <div className="main">
            {stop ? (
                <>
              <h1 className="end-txt">You Earned: {earned} </h1>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNum={questionNum} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    Data={Data}
                    setStop={setStop}
                    questionNum={questionNum}
                    setQuestionNum={setQuestionNum}
                  />
                </div>
              </>
            )}
          </div>
          <div className="money">
            <ul className="money-list">
              {Money.map((m) => (
                <li
                  className={
                    questionNum === m.id
                      ? "money-l-item active"
                      : "money-l-item"
                  }
                >
                  <span className="money-item-num">{m.id}</span>
                  <span className="money-item-amount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUser={setUser} />
      )}
    </div>
  );
}

export default App;
