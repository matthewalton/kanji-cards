"use client";

import Kanji from "@/app/types/Kanji";
import KanjiCard from "../cards/KanjiCard";
import { useState } from "react";

type Props = {
  deck: Kanji[];
};

export default function ChallengeDeck({ deck }: Props) {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleCardClick = (card: Kanji) => {
    if (selectedCardId === card.id) {
      setSelectedCardId(null);
      return;
    }

    setSelectedCardId(card.id);
  };

  return (
    <div className="flex justify-center">
      {deck.map((kanji) => {
        return (
          <div
            className={
              "-mx-2 transition ease-in-out " +
              (selectedCardId === kanji.id ? "z-10 -translate-y-2 " : "") +
              (selectedCardId && selectedCardId !== kanji.id
                ? "hover:-translate-y-1 "
                : "hover:z-10 hover:-translate-y-2 ")
            }
            key={kanji.id}
          >
            <KanjiCard card={kanji} onClick={() => handleCardClick(kanji)} />
          </div>
        );
      })}
    </div>
  );
}
