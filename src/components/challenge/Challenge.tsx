"use client";

import { useCallback, useEffect, useState } from "react";
import ChallengeScreen from "./ChallengeScreen";
import ChallengeControls from "./ChallengeControls";
import ChallengeDeck from "./ChallengeDeck";
import ChallengeStat from "./stats/ChallengeStat";
import { KanjiQuestion } from "@/app/types/Challenge";
import Kanji from "@/app/types/Kanji";
import ChallengeControlRestart from "./controls/ChallengeControlRestart";
import ChallengeControlsStart from "./controls/ChallengeControlStart";

async function getQuestion(kanji: Kanji): Promise<KanjiQuestion> {
  const res = await fetch(`/api/challenge/question?kanjiId=${kanji.id}`, {
    method: "GET",
  });

  const data = await res.json();
  return data;
}

async function getDeck(excludeIds: number[]): Promise<Kanji[]> {
  const res = await fetch(
    `/api/kanji?limit=5&excludeIds=${excludeIds.join()}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();
  return data.cards;
}

export default function Challenge({ children }: { children: React.ReactNode }) {
  const [question, setQuestion] = useState<KanjiQuestion | null>(null);
  const [deck, setDeck] = useState<Kanji[]>([]);
  const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);
  const [score, setScore] = useState<number>(0);
  const [usedKanji, setUsedKanji] = useState<Kanji[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  const handleReset = () => {
    setScore(0);
    setSelectedKanji(null);
    setUsedKanji([]);
    setDeck([]);
    setQuestion(null);
    setHasStarted(false);
  };

  const handleNewDeck = useCallback(async () => {
    const newDeck = await getDeck(usedKanji.map((kanji) => kanji.id));
    setDeck(newDeck);
  }, [usedKanji]);

  const handleNewQuestion = useCallback(async () => {
    if (deck.length === 0) return;

    const randomIndex = Math.floor(Math.random() * deck.length);
    const randomKanji = deck[randomIndex];

    const newQuestion = await getQuestion(randomKanji);
    setQuestion(newQuestion);
  }, [deck]);

  const handleMarkQuestion = () => {
    if (!question) {
      throw new Error("Failed to mark question. No question was set");
    }

    if (!selectedKanji) {
      throw new Error("Failed to mark question. No answer selected.");
    }

    if (question.answer === selectedKanji.kanji) {
      setScore(score + 1);
    }

    setUsedKanji([...usedKanji, selectedKanji]);
    setSelectedKanji(null);
  };

  useEffect(() => {
    if (!hasStarted) return;

    const fetchData = async () => {
      await handleNewDeck();
    };

    fetchData();
  }, [usedKanji, handleNewDeck, hasStarted]);

  useEffect(() => {
    if (deck.length > 0) {
      handleNewQuestion();
    }
  }, [deck, handleNewQuestion]);

  return (
    <>
      <div className="col-span-3">
        <div
          className="card border-4 flex justify-center text-center relative lg:p-10 bg-zinc-50 dark:bg-gray-950 dark:border-gray-500"
          style={{ minHeight: "75vh" }}
        >
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
              onShuffle={handleNewDeck}
              onNewQuestion={handleNewQuestion}
              onCancel={() => setSelectedKanji(null)}
              onConfirm={handleMarkQuestion}
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-3">
        {hasStarted && (
          <>
            <ChallengeStat text="Score" stat={score.toString()} />

            <ChallengeStat
              text="Kanji Used"
              stat={
                usedKanji.length
                  ? usedKanji.map((kanji) => kanji.kanji).join(" , ")
                  : "-"
              }
            />
          </>
        )}

        <div className="flex flex-col gap-3 mt-auto">
          {!hasStarted && (
            <ChallengeControlsStart onClick={() => setHasStarted(true)} />
          )}
          {hasStarted && <ChallengeControlRestart onClick={handleReset} />}
          {children}
        </div>
      </div>
    </>
  );
}
