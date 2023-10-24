import Challenge from "@/components/challenge/Challenge";
import ChallengeControlQuit from "@/components/challenge/controls/ChallengeControlQuit";
import ChallengeControlRestart from "@/components/challenge/controls/ChallengeControlRestart";

export default function Page() {
  return (
    <main className="grid grid-cols-4 gap-5">
      <Challenge>
        <ChallengeControlQuit />
      </Challenge>
    </main>
  );
}
