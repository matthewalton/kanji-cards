import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Page() {
  return (
    <main>
      <Sidebar />

      <div className="h-full min-h-screen pl-24 bg-zinc-100 dark:bg-gray-900 text-zinc-800 dark:text-gray-200">
        <div className="grid grid-cols-3 gap-4 p-8">
          <section className="col-span-3">
            <div className="mb-4">
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
          </section>
        </div>
      </div>
    </main>
  );
}
