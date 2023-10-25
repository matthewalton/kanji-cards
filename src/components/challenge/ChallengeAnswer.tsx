import { QuestionHistory } from "@/app/types/Challenge";
import { useEffect, useState } from "react";

type Props = {
  show: boolean;
  questionHistoryItem: QuestionHistory;
  onDisplayTimeout: () => void;
};

export default function ChallengeAnswer({
  show,
  questionHistoryItem,
  onDisplayTimeout,
}: Props) {
  const [display, setDisplay] = useState(show);

  const isCorrect =
    questionHistoryItem.question.answer ===
    questionHistoryItem.userAnswer.kanji;

  useEffect(() => {
    if (show) {
      setDisplay(true);

      const timeout = setTimeout(() => {
        setDisplay(false);
        onDisplayTimeout();
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [show, onDisplayTimeout]);

  if (!display) return "";

  return (
    <div className="flex flex-col gap-5 text-2xl">
      <div
        className={
          "rounded border-4 px-6 py-1 font-bold " +
          (isCorrect
            ? "border-green-400 bg-green-200 text-green-800"
            : "border-red-400 bg-red-200 text-red-800")
        }
      >
        {isCorrect ? "Correct" : "Incorrect"}
      </div>

      {!isCorrect && (
        <div className="flex justify-center gap-3 text-white">
          <span>Correct Answer:</span>
          <span className="fw-bold">{questionHistoryItem.question.answer}</span>
        </div>
      )}
    </div>
  );
}
