import React from "react";
import Kanji from "../../app/types/Kanji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  card: Kanji;
  onCardClick: () => void;
}

export default function StudyKanjiCard({ card, onCardClick }: Props) {
  const handleCardClick = () => {
    onCardClick();
  };

  return (
    <>
      <div className="card border-4 transition ease-in-out shadow hover:shadow-sm border-zinc-200 dark:border-gray-700 bg-zinc-50 dark:bg-gray-800 text-zinc-800 dark:text-gray-400 text-center">
        <div className="flex flex-col gap-3 mb-2">
          <span className="text-5xl">{card.kanji}</span>
          <span className="text-lg">{card.kun_readings}</span>
        </div>

        <h5 className="font-medium text-4xl">{card.name}</h5>
      </div>

      <button
        className="rounded px-4 py-2 transition ease-in-out bg-red-600 hover:bg-red-700 text-gray-200 mt-5"
        onClick={() => handleCardClick()}
      >
        <FontAwesomeIcon icon={faChevronLeft} /> Back
      </button>
    </>
  );
}
