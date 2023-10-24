type Props = {
  onClick: () => void;
};

export default function ChallengeControlRestart({ onClick }: Props) {
  return (
    <button
      className="card text-center shadow-sm rounded-4 transition ease-in-out text-2xl font-bold bg-yellow-600 hover:bg-yellow-700"
      onClick={() => onClick()}
    >
      Restart
    </button>
  );
}
