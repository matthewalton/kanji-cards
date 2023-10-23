"use client";

import { useCallback, useEffect, useState } from "react";
import ChallengeScreen from "./ChallengeScreen";
import ChallengeControls from "./ChallengeControls";
import { KanjiQuestion } from "@/app/types/Challenge";
import Kanji from "@/app/types/Kanji";
import ChallengeDeck from "./ChallengeDeck";

async function getQuestion(kanji: Kanji): Promise<KanjiQuestion> {
  const res = await fetch(`/api/challenge/question?kanjiId=${kanji.id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

async function getDeck(): Promise<Kanji[]> {
  const res = await fetch("/api/cards?limit=5", { method: "GET" });
  const data = await res.json();
  return data.cards;
}

export default function Challenge() {
  const [question, setQuestion] = useState<KanjiQuestion | null>(null);
  const [deck, setDeck] = useState<Kanji[]>([]);
  const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);

  const handleStart = () => {
    handleNewDeck();
  };

  const handleNewDeck = async () => {
    const newDeck = await getDeck();
    setDeck(newDeck);
  };

  const handleNewQuestion = useCallback(async () => {
    if (deck.length === 0) return;

    const randomIndex = Math.floor(Math.random() * deck.length);
    const randomKanji = deck[randomIndex];

    const newQuestion = await getQuestion(randomKanji);
    setQuestion(newQuestion);
  }, [deck]);

  const handleMarkQuestion = () => {
    throw new Error("Function not yet implemented");
  };

  useEffect(() => {
    if (deck.length > 0) {
      handleNewQuestion();
    }
  }, [deck, handleNewQuestion]);

  return (
    <>
      <div className="self-center my-auto">
        <ChallengeScreen question={question} />
      </div>

      <div
        className="absolute bottom-0 flex flex-col gap-5"
        style={{ padding: "inherit" }}
      >
        {deck.length > 0 && (
          <ChallengeDeck
            deck={deck}
            selectedKanji={selectedKanji}
            onSelected={setSelectedKanji}
          />
        )}

        <ChallengeControls
          isActive={!!question}
          isSelected={!!selectedKanji}
          onStart={handleStart}
          onShuffle={handleNewDeck}
          onNewQuestion={handleNewQuestion}
          onCancel={() => setSelectedKanji(null)}
          onConfirm={handleMarkQuestion}
        />
      </div>
    </>
  );
}
