type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ChallengeControlsSelected({
  onCancel,
  onConfirm,
}: Props) {
  return (
    <>
      <button
        className="bg-red-600 hover:bg-red-700 transition ease-in-out text-gray-100 px-4 py-1 rounded font-bold"
        onClick={() => onCancel()}
      >
        Cancel
      </button>

      <button
        className="bg-green-600 hover:bg-green-700 transition ease-in-out text-gray-100 px-6 py-2 rounded font-bold"
        onClick={() => onConfirm()}
      >
        Confirm
      </button>
    </>
  );
}
