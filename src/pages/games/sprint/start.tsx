import Layout from "@/components/common/Layout/Layout";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import React, { useState } from "react";
import data from "../../../../data/quiz.json";
import { IAnswerOption } from "../../../../@types";

import s from "./start.module.css";

const start = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const RightAnswerHandler = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      data[currentQuestion].answerOption.map((item: IAnswerOption) => {
        item.isCorrect ? setScore(score + 10) : setScore(score + 0);
      });
    } else {
      setShowScore(true);
    }
  };
  const WrongAnswerHandler = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      data[currentQuestion].answerOption.map((item: IAnswerOption) => {
        !item.isCorrect ? setScore(score + 10) : setScore(score + 0);
      });
    } else {
      setShowScore(true);
    }
  };
  return (
    <Container>
      {!showScore ? (
        <div className="relative w-96 h-96 mx-auto bg-transparent">
          <div className="absolute right-1 -bottom-2">
            <svg
              className={`${s.path}`}
              xmlns="http://www.w3.org/2000/svg"
              width="410"
              height="410"
            >
              <circle
                cx="210"
                cy="210"
                r="170"
                fill="rgba(255,255,255,0)"
                stroke="#2b788b"
                strokeWidth="5"
              />
            </svg>
          </div>

          <div className="absolute left-20 top-16">
            <div className="flex space-x-16 justify-center">
              <p className="flex flex-col ">
                <span className="font-extrabold ml-2 text-2xl">x2</span>
                <span className="text-xs text-gray-dark font-bold">
                  multiplier
                </span>
              </p>
              <p className="flex flex-col">
                <span className="font-extrabold ml-1 text-2xl">{score}</span>
                <span className="text-xs text-gray-dark font-bold">points</span>
              </p>
            </div>
            <div className="flex flex-col items-center mt-8">
              <span className="text-3xl font-extrabold">
                {data[currentQuestion].word}
              </span>

              <p className="text-3xl font-extrabold text-cayan-dark">
                {data[currentQuestion].answerOption.map(
                  (item: IAnswerOption, i) => {
                    return <span key={i}>{item.answerText}</span>;
                  }
                )}
              </p>
            </div>

            <div className="flex justify-center space-x-3 mt-8 mb-20">
              <div onClick={RightAnswerHandler}>
                <Button bgColor="bg-cayan-light" textColor="text-cayan-dark">
                  Right
                </Button>
              </div>

              <div onClick={WrongAnswerHandler}>
                <Button bgColor="bg-cayan-light" textColor="text-cayan-dark">
                  Wrong
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>SCORE {score}</div>
      )}
    </Container>
  );
};

export default start;

start.Layout = Layout;
