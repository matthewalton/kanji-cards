"use client";

import { KanjiQuestion } from "@/app/types/Challenge";
import { useState, useEffect } from "react";

type Props = {
  question: KanjiQuestion;
};

export default function ChallengeScreenActive({ question }: Props) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    setTypedText("");

    const textToType = question.question;

    if (currentIndex < textToType.length) {
      const animate = () => {
        setTypedText(textToType.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex < textToType.length) {
          setTimeout(animate, 50);
        }
      };

      setTimeout(animate, 50);
    }
  }, [question]);

  return (
    <div className="text-3xl font-mono dark:text-white text-black text-wrap">
      {typedText}
    </div>
  );
}
