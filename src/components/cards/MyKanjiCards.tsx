"use client";

import Kanji from "../../app/types/Kanji";
import StudyKanjiCard from "./StudyKanjiCard";
import { useState } from "react";
import KanjiCard from "./KanjiCard";

export default function MyKanjiCards({ cards }: { cards: Kanji[] }) {
  const [activeCard, setActiveCard] = useState<Kanji | null>(null);

  const handleCardClick = (cardData: Kanji) => {
    setActiveCard(cardData);
  };

  const handleStudyCardClick = () => {
    setActiveCard(null);
  };

  return (
    <>
      {activeCard ? (
        <StudyKanjiCard card={activeCard} onCardClick={handleStudyCardClick} />
      ) : (
        <div className="flex flex-row flex-wrap gap-3">
          {cards.length > 0 ? (
            cards.map((card: Kanji) => {
              return (
                <KanjiCard
                  key={card.id}
                  card={card}
                  onClick={() => handleCardClick(card)}
                />
              );
            })
          ) : (
            <div>You do not have any cards!</div>
          )}
        </div>
      )}
    </>
  );
}
