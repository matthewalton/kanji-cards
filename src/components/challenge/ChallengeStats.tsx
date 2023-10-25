import { QuestionHistory } from "@/app/types/Challenge";
import ChallengeStat from "./stats/ChallengeStat";

type Props = {
  hasStarted: boolean;
  score: number;
  questionHistory: QuestionHistory[];
};

export default function ChallengeStats({
  hasStarted,
  score,
  questionHistory,
}: Props) {
  if (!hasStarted) return "";

  return (
    <>
      <ChallengeStat text="Score" stat={score.toString()} />

      <ChallengeStat
        text="Kanji Used"
        stat={
          questionHistory.length
            ? questionHistory
                .map((historyItem) => historyItem.userAnswer.kanji)
                .join(" , ")
            : "-"
        }
      />
    </>
  );
}
