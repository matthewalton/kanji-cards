import React from "react";
import KanjiCardDTO from "@/app/types/KanjiCardDTO";

interface KanjiCardProps {
  card: KanjiCardDTO;
  animate?: boolean;
}

export default function KanjiCard({ card, animate = false }: KanjiCardProps) {
  return (
    <div
      role="button"
      className={`card w-max border-4 transition ease-in-out ${
        animate ? "hover:shadow" : ""
      } border-zinc-200 dark:border-gray-700 bg-zinc-50 dark:bg-gray-800 text-zinc-800 dark:text-gray-400`}
    >
      <div className="text-center text-4xl">{card.kanji}</div>
    </div>
  );
}
