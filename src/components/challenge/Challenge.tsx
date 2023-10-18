"use client";

import { useState } from "react";
import ChallengeScreen from "./ChallengeScreen";
import ChallengeControls from "./ChallengeControls";

export default function Challenge() {
  const [challengeActive, setChallengeActive] = useState(false);

  return (
    <>
      <ChallengeScreen isActive={challengeActive} />

      <ChallengeControls
        isActive={challengeActive}
        onStart={() => setChallengeActive(true)}
        onShuffle={() => {}}
        onNewQuestion={() => {}}
      />
    </>
  );
}
