import Link from "next/link";

export default function StartChallenceMenuAction() {
  return (
    <div className="card shadow-sm border-4 rounded-4 dark:border-gray-600 bg-zinc-50 dark:bg-gray-800">
      Ready to face the AI challenge?
      <div className="mt-5">
        <Link
          href="/challenge"
          className="rounded px-4 py-2 transition ease-in-out text-gray-200 bg-green-600 hover:bg-green-700"
        >
          Start New Challenge
        </Link>
      </div>
    </div>
  );
}
