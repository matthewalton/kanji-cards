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
        className="card border-4 flex gap-5 items-center justify-center flex-col bg-zinc-50 dark:bg-gray-950 dark:border-gray-500"
        style={{ minHeight: "50vh" }}
      >
        <div className="flex flex-col gap-5 lg:px-40">
          <Challenge />
        </div>
      </div>
    </main>
  );
}
