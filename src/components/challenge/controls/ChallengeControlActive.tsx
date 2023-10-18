import { faArrowsRotate, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onShuffle: () => void;
  onNewQuestion: () => void;
};

export default function ChallengeControlsActive({
  onShuffle,
  onNewQuestion,
}: Props) {
  const handleClickShuffle = () => {
    onShuffle();
  };

  const handleNewQuestionClick = () => {
    onNewQuestion();
  };

  return (
    <>
      <button
        className="bg-green-600 hover:bg-green-700 transition ease-in-out text-gray-100 px-4 py-1 rounded-full"
        onClick={() => handleClickShuffle()}
      >
        <FontAwesomeIcon icon={faShuffle} className="text-3xl" />
      </button>

      <button
        className="bg-yellow-600 hover:bg-yellow-700 transition ease-in-out text-gray-100 px-4 py-1 rounded-full"
        onClick={() => handleNewQuestionClick()}
      >
        <FontAwesomeIcon icon={faArrowsRotate} className="text-3xl" />
      </button>
    </>
  );
}
