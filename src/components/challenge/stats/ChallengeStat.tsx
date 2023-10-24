type Props = {
  text: string;
  stat: string;
};

export default function ChallengeStat({ text, stat }: Props) {
  return (
    <div className="card shadow-sm border-4 rounded-4 bg-zinc-50 dark:border-gray-600 dark:bg-gray-800">
      <div className="flex justify-between gap-5">
        <span className="whitespace-nowrap">{text}</span>
        <span className="font-bold text-right">{stat}</span>
      </div>
    </div>
  );
}
