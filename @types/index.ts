export interface IQuiz {
  word?: string;
  answerOption?: IAnswerOption;
}

export interface IAnswerOption {
  isCorrect?: boolean;
  answerText?: string;
}
