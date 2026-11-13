import Image from "next/image";
import Link from "next/link";
import { Locale, route } from "@/lib/content";

export function BrandMark({ locale, light = false }: { locale: Locale; light?: boolean }) {
  return (
    <Link href={route(locale)} className={`brand-mark ${light ? "brand-mark-light" : ""}`} aria-label="The Idea Brands home">
      <Image src="/logo.png" alt="The Idea Brands" width={223} height={140} priority />
    </Link>
  );
}
