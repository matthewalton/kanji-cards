import MyKanjiCards from "../../components/cards/MyKanjiCards";

async function getCards() {
  const res = await fetch(process.env.URL + "/api/cards", { method: "GET" });
  const data = await res.json();
  return data.cards;
}

export default async function Page() {
  const cards = await getCards();

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-5xl">My Cards</h1>

      <MyKanjiCards cards={cards ? cards : []} />
    </main>
  );
}
