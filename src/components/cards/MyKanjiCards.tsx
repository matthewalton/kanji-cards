import KanjiCardDTO from "@/app/types/KanjiCardDTO";
import KanjiCard from "./KanjiCard";

async function getCards() {
  const res = await fetch(process.env.URL + "/api/cards", { method: "GET" });
  const data = await res.json();
  return data.cards;
}

export default async function MyKanjiCards() {
  const cards = await getCards();

  return (
    <div className="flex flex-row flex-wrap gap-3">
      {cards.length > 0 ? (
        cards.map((card: KanjiCardDTO) => {
          return <KanjiCard key={card.id} card={card} />;
        })
      ) : (
        <div>You do not have any cards!</div>
      )}
    </div>
  );
}
