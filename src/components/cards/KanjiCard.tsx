import React from "react";
import KanjiCardDTO from "../../app/types/KanjiCardDTO";

interface KanjiCardProps {
  card: KanjiCardDTO;
  onClick: () => void;
}

export default function KanjiCard({ card, onClick }: KanjiCardProps) {
  return (
    <div
      role="button"
      className={`card w-max border-4 transition ease-in-out hover:shadow border-zinc-200 dark:border-gray-700 bg-zinc-50 dark:bg-gray-800 text-zinc-800 dark:text-gray-400`}
      onClick={onClick}
    >
      <div className="text-center text-4xl">{card.kanji}</div>
    </div>
  );
}
