import MyKanjiCards from "../../components/cards/MyKanjiCards";

async function getCards() {
  const res = await fetch(process.env.URL + "/api/cards", { method: "GET" });
  const data = await res.json();
  return data.cards;
}

export default async function Page() {
  const cards = await getCards();

  return (
    <main>
      <h1 className="text-5xl mb-5">My Cards</h1>

      <MyKanjiCards cards={cards ? cards : []} />
    </main>
  );
}
