import { KanjiQuestion } from "@/app/types/Challenge";
import ChallengeScreenActive from "./screens/ChallengeScreenActive";
import ChallengeScreenStart from "./screens/ChallengeScreenStart";

type Props = {
  question: KanjiQuestion | null;
};

export default function ChallengeScreen({ question }: Props) {
  return (
    <div className="flex justify-center">
      {question ? (
        <ChallengeScreenActive key={question.question} question={question} />
      ) : (
        <ChallengeScreenStart />
      )}
    </div>
  );
}
