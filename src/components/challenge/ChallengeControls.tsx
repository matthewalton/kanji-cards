import ChallengeControlsActive from "./controls/ChallengeControlActive";
import ChallengeControlsSelected from "./controls/ChallengeControlSelected";
import ChallengeControlsStart from "./controls/ChallengeControlStart";

type Props = {
  isActive: boolean;
  isSelected: boolean;
  onStart: () => void;
  onShuffle: () => void;
  onNewQuestion: () => void;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ChallengeControls({
  isActive,
  isSelected,
  onStart,
  onShuffle,
  onNewQuestion,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <div className="flex gap-2 justify-center">
      {isActive && !isSelected && (
        <ChallengeControlsActive
          onShuffle={onShuffle}
          onNewQuestion={onNewQuestion}
        />
      )}

      {isSelected && (
        <ChallengeControlsSelected onCancel={onCancel} onConfirm={onConfirm} />
      )}

      {!isActive && <ChallengeControlsStart onClick={onStart} />}
    </div>
  );
}
