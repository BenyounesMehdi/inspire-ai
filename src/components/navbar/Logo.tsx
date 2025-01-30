import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <p className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent text-3xl font-semibold">
        Inspire AI
      </p>
    </Link>
  );
}
