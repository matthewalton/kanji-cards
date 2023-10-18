type Props = {
  onClick: () => void;
};

export default function ChallengeControlsStart({ onClick }: Props) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className="bg-green-600 hover:bg-green-700 transition ease-in-out text-gray-100 text-3xl px-6 py-2 rounded"
      onClick={() => handleClick()}
    >
      Start
    </button>
  );
}
