import Kanji from "@/app/types/Kanji";
import KanjiCard from "../cards/KanjiCard";

type Props = {
  deck: Kanji[];
};

export default function ChallengeDeck({ deck }: Props) {
  return (
    <div className="flex justify-center">
      {deck.map((kanji) => {
        return (
          <KanjiCard
            key={kanji.id}
            card={kanji}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        );
      })}
    </div>
  );
}
