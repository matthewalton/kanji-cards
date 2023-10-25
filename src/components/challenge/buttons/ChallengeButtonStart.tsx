type Props = {
  onClick: () => void;
};

export default function ChallengeButtonStart({ onClick }: Props) {
  return (
    <button
      className="card text-center shadow-sm rounded-4 transition ease-in-out text-2xl font-bold bg-green-600 hover:bg-green-700"
      onClick={() => onClick()}
    >
      Start
    </button>
  );
}
