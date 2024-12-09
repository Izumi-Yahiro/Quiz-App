import React from "react";
import "./Question.css";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestion: number;
};

const Question: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestion,
}) => (
  <div >
    <p className="number">
      Question: {questionNr} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answer.map((ans) => (
        <div key={ans}>
          <button className="option"
            disabled={userAnswer}
            value={ans}
            onClick={callback}
            style={{
              backgroundColor: userAnswer
                ? ans === userAnswer.correctAnswer
                  ? 'green'
                  : ans === userAnswer.answer
                  ? 'red'
                  : 'initial'
                : 'initial',
              color: userAnswer && (ans === userAnswer.correctAnswer || ans === userAnswer.answer) ? 'white' : 'black',
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: ans }} />
          </button>
        </div>
      ))}
    </div>
    {userAnswer && (
      <div>
        {userAnswer.answer === userAnswer.correctAnswer ? (
          <p style={{ color: 'green' }}>Correct! You have guessed the right answer</p>
        ) : (
          <p style={{ color: 'red' }}>Wrong! The correct answer is {userAnswer.correctAnswer}.</p>
        )}
      </div>
    )}
  </div>
);

export default Question;