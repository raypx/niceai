import Image from "next/image";
import Link from "next/link";

const sizes = {
  sm: { className: "size-5", px: 20 },
  md: { className: "size-7", px: 28 },
} as const;

interface LogoProps {
  size?: keyof typeof sizes;
  showLabel?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showLabel = true, className }: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      className={["flex items-center gap-2 text-lg font-semibold tracking-tighter", className]
        .filter(Boolean)
        .join(" ")}
      href="/"
    >
      <Image
        alt=""
        className={`dark:hidden ${s.className}`}
        height={s.px}
        src="/logo-32x32.png"
        width={s.px}
      />
      <Image
        alt=""
        className={`hidden dark:block ${s.className}`}
        height={s.px}
        src="/logo-dark.png"
        width={s.px}
      />
      {showLabel && <span>niceai</span>}
    </Link>
  );
}
