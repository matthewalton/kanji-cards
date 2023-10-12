import KanjiCardDTO from "@/app/types/KanjiCardDTO";
import KanjiCard from "./KanjiCard";

async function getCards() {
  try {
    const res = await fetch(process.env.URL + "/api/cards", { method: "GET" });

    if (!res.ok) {
      console.log("Failed to fetch cards.");
      return [];
    }

    return res.json();
  } catch (error) {
    console.log("Failed to fetch cards.");
    return [];
  }
}

export default async function MyKanjiCards() {
  const cards = await getCards();

  return (
    <div className="flex flex-row flex-wrap gap-3">
      {cards.length > 0 ? (
        cards.map((card: KanjiCardDTO) => {
          <KanjiCard key={card.id} card={card} />;
        })
      ) : (
        <div>You do not have any cards!</div>
      )}
    </div>
  );
}
