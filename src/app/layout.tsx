import ActionMenu from "@/components/layout/menu/ActionMenu";
import Sidebar from "../components/layout/Sidebar";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanji Cards",
  description: "Japanese education app using ChatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />

        <div className="h-full min-h-screen pl-24 bg-zinc-100 dark:bg-gray-900 text-zinc-800 dark:text-gray-200">
          <section className="flex gap-4 p-8">
            <div className="flex-grow">{children}</div>

            <ActionMenu />
          </section>
        </div>
      </body>
    </html>
  );
}
