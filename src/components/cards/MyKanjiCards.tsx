"use client";

import KanjiCardDTO from "../../app/types/KanjiCardDTO";
import StudyKanjiCard from "./StudyKanjiCard";
import { useState } from "react";
import KanjiCard from "./KanjiCard";

export default function MyKanjiCards({ cards }: { cards: KanjiCardDTO[] }) {
  const [activeCard, setActiveCard] = useState<KanjiCardDTO | null>(null);

  const handleCardClick = (cardData: KanjiCardDTO) => {
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
            cards.map((card: KanjiCardDTO) => {
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
