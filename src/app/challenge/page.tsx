import Challenge from "@/components/challenge/Challenge";
import ChallengeButtonQuit from "@/components/challenge/buttons/ChallengeButtonQuit";

export default function Page() {
  return (
    <main className="grid grid-cols-4 gap-5">
      <Challenge>
        <ChallengeButtonQuit />
      </Challenge>
    </main>
  );
}
