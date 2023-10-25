import ChallengeButtonRestart from "./buttons/ChallengeButtonRestart";
import ChallengeButtonStart from "./buttons/ChallengeButtonStart";

type Props = {
  hasStarted: boolean;
  onStartClick: () => void;
  onRestartClick: () => void;
  children: React.ReactNode;
};

export default function ChallengeButtons({
  hasStarted,
  onStartClick,
  onRestartClick,
  children,
}: Props) {
  return (
    <div className="flex flex-col gap-3 mt-auto">
      {!hasStarted && <ChallengeButtonStart onClick={onStartClick} />}

      {hasStarted && <ChallengeButtonRestart onClick={onRestartClick} />}

      {children}
    </div>
  );
}
