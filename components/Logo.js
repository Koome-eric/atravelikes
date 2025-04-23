import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }) {
  return (
    <Link
      aria-label="Golob logo. Click to go to home page"
      href="/"
      className="inline-block"
    >
      <Image
        src="/images/golobe-logo.svg"
        alt="Golobe logo"
        width={150}
        height={70}
        className={cn("h-[40px] w-auto", className)}
        priority
      />
    </Link>
  );
}
