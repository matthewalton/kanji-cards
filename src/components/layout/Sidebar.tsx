import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCube, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 z-1">
      <ul className="flex gap-8 flex-col items-center p-4 h-screen overflow-y-auto border-r-4 border-zinc-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-4xl">
        <li>
          <Link href="/">
            <Image
              src="/images/kanji-cards-favicon.webp"
              alt="Kanji Cards Logo"
              width="64"
              height="64"
            />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="transition ease-in-out dark:text-gray-300 dark:hover:text-white dark:active:text-white"
          >
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li>
          <Link
            href="/cards"
            className="transition ease-in-out dark:text-gray-300 dark:hover:text-white dark:active:text-white"
          >
            <FontAwesomeIcon icon={faCube} />
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="transition ease-in-out dark:text-gray-300 dark:hover:text-white dark:active:text-white"
          >
            <FontAwesomeIcon icon={faGear} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
