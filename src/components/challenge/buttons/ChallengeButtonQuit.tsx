import Link from "next/link";

export default function ChallengeButtonQuit() {
  return (
    <Link
      href="/cards"
      className="card text-center shadow-sm rounded-4 transition ease-in-out text-2xl font-bold bg-red-600 hover:bg-red-700"
    >
      Quit
    </Link>
  );
}
