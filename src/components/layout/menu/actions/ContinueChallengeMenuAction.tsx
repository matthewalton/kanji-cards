import Link from "next/link";

export default function ContinueChallengeMenuAction() {
  return (
    <>
      <div className="card shadow-sm border-4 rounded-4 dark:border-gray-600 bg-zinc-50 dark:bg-gray-800">
        You have a challenge against the AI in progress.
        <div className="mt-5">
          <Link
            href="/challenge"
            className="rounded px-4 py-2 transition ease-in-out text-gray-200 bg-yellow-600 hover:bg-yellow-700"
          >
            Continue Challenge
          </Link>
        </div>
      </div>
    </>
  );
}
