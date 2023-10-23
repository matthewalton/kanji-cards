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
          <div className="-mx-2 hover:z-10 hover:-translate-y-1" key={kanji.id}>
            <KanjiCard
              card={kanji}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
