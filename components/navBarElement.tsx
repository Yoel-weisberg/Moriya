'use client';

import Link from "next/link";

export default function NavBarElement({
  href,
  text,
  scrolled,
}: {
  href: string;
  text: string;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={`transition-all duration-300 hover:scale-105 ${
        scrolled
          ? "text-warmBrown-100 hover:text-white"
          : "text-white hover:text-white"
      }`}
    >
      {text}
    </Link>
  );
}