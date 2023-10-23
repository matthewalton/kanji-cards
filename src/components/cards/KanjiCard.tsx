import React from "react";
import Kanji from "../../app/types/Kanji";

interface KanjiCardProps {
  card: Kanji;
  onClick: () => void;
  clickable?: boolean;
}

export default function KanjiCard({
  card,
  onClick,
  clickable = true,
}: KanjiCardProps) {
  return (
    <div
      className={
        "card w-max border-4 transition ease-in-out hover:shadow border-zinc-200 dark:border-gray-700 bg-zinc-50 dark:bg-gray-800 text-zinc-800 dark:text-gray-400 select-none " +
        (clickable ? "cursor-pointer" : "cursor-default")
      }
      onClick={onClick}
    >
      <div className="text-center text-4xl">{card.kanji}</div>
    </div>
  );
}
