"use client";

import Kanji from "@/app/types/Kanji";
import KanjiCard from "../cards/KanjiCard";
import { useState } from "react";

type Props = {
  deck: Kanji[];
};

export default function ChallengeDeck({ deck }: Props) {
  const [selectedKanjiId, setSelectedKanjiId] = useState<number>(0);

  const handleCardClick = (kanji: Kanji) => {
    if (!selectedKanjiId) {
      setSelectedKanjiId(kanji.id);
      return;
    }

    setSelectedKanjiId(0);
  };

  return (
    <div className="flex justify-center">
      {deck.map((kanji) => {
        return (
          <div
            className={
              "-mx-2 transition ease-in-out " +
              (selectedKanjiId === kanji.id
                ? "z-10 scale-110 -translate-y-2 "
                : " ") +
              (selectedKanjiId && selectedKanjiId !== kanji.id
                ? "blur-sm brightness-50 "
                : " ") +
              (!selectedKanjiId ? "hover:-translate-y-1" : "")
            }
            key={kanji.id}
          >
            <KanjiCard
              card={kanji}
              onClick={() => handleCardClick(kanji)}
              clickable={!selectedKanjiId || selectedKanjiId === kanji.id}
            />
          </div>
        );
      })}
    </div>
  );
}
