"use client";

import { useCallback, useEffect, useState } from "react";
import ChallengeScreen from "./ChallengeScreen";
import ChallengeControls from "./ChallengeControls";
import ChallengeDeck from "./ChallengeDeck";
import ChallengeAnswer from "./ChallengeAnswer";
import ChallengeButtons from "./ChallengeButtons";
import ChallengeStats from "./ChallengeStats";
import { KanjiQuestion, QuestionHistory } from "@/app/types/Challenge";
import Kanji from "@/app/types/Kanji";

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
  const [questionHistory, setQuestionHistory] = useState<QuestionHistory[]>([]);

  const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);
  const [deck, setDeck] = useState<Kanji[]>([]);

  const [score, setScore] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleReset = () => {
    setScore(0);
    setSelectedKanji(null);
    setDeck([]);
    setQuestion(null);
    setHasStarted(false);
    setQuestionHistory([]);
  };

  const handleNewDeck = useCallback(async () => {
    const excludeIds = questionHistory.map(
      (historyItem) => historyItem.userAnswer.id
    );

    const newDeck = await getDeck(excludeIds);
    setDeck(newDeck);
  }, [questionHistory]);

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

    setQuestionHistory([
      ...questionHistory,
      {
        question: question,
        userAnswer: selectedKanji,
      },
    ]);
    setSelectedKanji(null);
  };

  useEffect(() => {
    if (!hasStarted) return;

    setShowAnswer(true);

    const fetchData = async () => {
      await handleNewDeck();
    };

    fetchData();
  }, [questionHistory, handleNewDeck, hasStarted]);

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
          <div className="absolute top-0" style={{ padding: "inherit" }}>
            {questionHistory.length > 0 && (
              <ChallengeAnswer
                show={showAnswer}
                questionHistoryItem={
                  questionHistory[questionHistory.length - 1]
                }
                onDisplayTimeout={() => setShowAnswer(false)}
              />
            )}
          </div>

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
        <ChallengeStats
          hasStarted={hasStarted}
          score={score}
          questionHistory={questionHistory}
        />

        <ChallengeButtons
          hasStarted={hasStarted}
          onStartClick={() => setHasStarted(true)}
          onRestartClick={handleReset}
        >
          {children}
        </ChallengeButtons>
      </div>
    </>
  );
}
