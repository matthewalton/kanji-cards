"use client";

import Kanji from "@/app/types/Kanji";
import KanjiCard from "../cards/KanjiCard";
import { useState } from "react";

type Props = {
  deck: Kanji[];
  selectedKanji: Kanji | null;
  onSelected: (kanji: Kanji | null) => void;
};

export default function ChallengeDeck({
  deck,
  selectedKanji,
  onSelected,
}: Props) {
  const handleCardClick = (kanji: Kanji) => {
    if (!selectedKanji) {
      onSelected(kanji);
      return;
    }

    onSelected(null);
  };

  return (
    <div className="flex justify-center">
      {deck.map((kanji) => {
        return (
          <div
            className={
              "-mx-2 transition ease-in-out " +
              (selectedKanji === kanji
                ? "z-10 scale-110 -translate-y-2 "
                : " ") +
              (selectedKanji && selectedKanji !== kanji
                ? "blur-sm brightness-50 "
                : " ") +
              (!selectedKanji ? "hover:-translate-y-1" : "")
            }
            key={kanji.id}
          >
            <KanjiCard
              card={kanji}
              onClick={() => handleCardClick(kanji)}
              clickable={!selectedKanji || selectedKanji === kanji}
            />
          </div>
        );
      })}
    </div>
  );
}
