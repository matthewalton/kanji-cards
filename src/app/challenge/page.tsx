import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Challenge from "@/components/challenge/Challenge";

export default function Page() {
  return (
    <main className="flex flex-col gap-5">
      <Link href="/cards">
        <FontAwesomeIcon icon={faBackwardStep} className="text-3xl" />
      </Link>

      <div
        className="card border-4 flex justify-center text-center relative lg:p-10 bg-zinc-50 dark:bg-gray-950 dark:border-gray-500"
        style={{ minHeight: "75vh" }}
      >
        <Challenge />
      </div>
    </main>
  );
}
