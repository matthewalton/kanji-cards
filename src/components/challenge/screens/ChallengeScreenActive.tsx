import { KanjiQuestion } from "@/app/types/Challenge";

type Props = {
  question: KanjiQuestion;
};

export default function ChallengeScreenActive({ question }: Props) {
  return (
    <div className="text-3xl font-mono dark:text-white text-black text-wrap">
      {question.question}
    </div>
  );
}
