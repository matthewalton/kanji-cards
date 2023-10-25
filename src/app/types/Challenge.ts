import Kanji from "./Kanji";

type KanjiQuestion = {
  question: string;
  answer: string;
};

type QuestionHistory = {
  question: KanjiQuestion;
  userAnswer: Kanji;
};

export type { KanjiQuestion, QuestionHistory };
