import MyKanjiCards from "@/components/cards/MyKanjiCards";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <h1 className="text-5xl mb-5">My Cards</h1>

      <Suspense>
        <MyKanjiCards />
      </Suspense>
    </main>
  );
}
