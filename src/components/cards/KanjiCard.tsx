import React from "react";
import Kanji from "../../app/types/Kanji";

interface KanjiCardProps {
  card: Kanji;
  onClick: () => void;
}

export default function KanjiCard({ card, onClick }: KanjiCardProps) {
  return (
    <div
      className={
        "card cursor-pointer w-max border-4 transition ease-in-out hover:shadow border-zinc-200 dark:border-gray-700 bg-zinc-50 dark:bg-gray-800 text-zinc-800 dark:text-gray-400"
      }
      onClick={onClick}
    >
      <div className="text-center text-4xl">{card.kanji}</div>
    </div>
  );
}
