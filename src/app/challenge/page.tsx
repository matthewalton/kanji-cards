import Challenge from "@/components/challenge/Challenge";
import Link from "next/link";

export default function Page() {
  return (
    <main className="grid grid-cols-3 gap-5">
      <Challenge>
        <Link
          href="/cards"
          className="card text-center shadow-sm rounded-4 transition ease-in-out text-2xl font-bold bg-red-500 hover:bg-red-600"
        >
          End Challenge
        </Link>
      </Challenge>
    </main>
  );
}
