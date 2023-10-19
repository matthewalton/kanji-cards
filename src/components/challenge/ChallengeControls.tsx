import ChallengeControlsActive from "./controls/ChallengeControlActive";
import ChallengeControlsStart from "./controls/ChallengeControlStart";

type Props = {
  isActive: boolean;
  onStart: () => void;
  onShuffle: () => void;
  onNewQuestion: () => void;
};

export default function ChallengeControls({
  isActive,
  onStart,
  onShuffle,
  onNewQuestion,
}: Props) {
  const handleClickStart = () => {
    onStart();
  };

  const handleClickShuffle = () => {
    onShuffle();
  };

  const handleClickNewQuestion = () => {
    onNewQuestion();
  };

  return (
    <div className="flex gap-2 justify-center">
      {isActive ? (
        <ChallengeControlsActive
          onShuffle={handleClickShuffle}
          onNewQuestion={handleClickNewQuestion}
        />
      ) : (
        <ChallengeControlsStart onClick={handleClickStart} />
      )}
    </div>
  );
}
