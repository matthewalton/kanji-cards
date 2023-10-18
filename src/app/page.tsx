import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col gap-5">
      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/kanji-cards.webp"
          alt="Kanji Cards Logo"
          width={500}
          height={97}
          priority
        />
      </div>

      <h1 className="text-5xl">Welcome!</h1>
    </main>
  );
}
