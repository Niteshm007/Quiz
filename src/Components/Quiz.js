import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import Play from "../Assets/Play.mp3";
import Correct from "../Assets/Correct.mp3";
import Wrong from "../Assets/Wrong.mp3";

export default function Quiz({ Data, setStop, questionNum, setQuestionNum }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(Play);
  const [correctAnswer] = useSound(Correct);
  const [wrongAnswer] = useSound(Wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(Data[questionNum - 1]);
  }, [Data, questionNum]);

  const Delay = (ducation, callback) => {
    setTimeout(() => {
      callback();
    }, ducation);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    Delay(1000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong ")
    );
    Delay(3000, () => {
      if (a.correct) {
        correctAnswer();
        Delay(1000, () => {
          setQuestionNum((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer()
        Delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="Quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
