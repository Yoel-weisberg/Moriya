import Link from "next/link";
import { ReactNode } from "react";

export default function ContactLink({
  href,
  icon,
  title,
  description,
  bgColor,
  animationDelay,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
  animationDelay?: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`flex items-start gap-3 md:gap-4 p-3 md:p-4 ${bgColor} rounded-lg hover:bg-opacity-80 transition-all transform hover:-translate-y-1 hover:shadow-md reveal touch-manipulation`}
      style={{ animationDelay }}
    >
      <div className="p-2 md:p-3 rounded-full text-white" style={{ backgroundColor: bgColor }}>
        {icon}
      </div>
      <div className="text-left"> {/* Explicitly added text-left */}
        <h4 className="font-medium text-sm md:text-base text-warmBrown-100">{title}</h4>
        <p className="text-xs md:text-sm text-warmBrown-100">{description}</p>
      </div>
    </Link>
  );
}