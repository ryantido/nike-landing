import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ShoeCard({
  url,
  onChange,
  name,
}: {
  url: string;
  onChange: () => void;
  name: string;
}) {
  const isActive = name === url;

  return (
    <button
      onClick={onChange}
      className={cn(
        "relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 transition-all duration-300 transform hover:scale-105 focus:outline-none",
        isActive
          ? "border-red-500 ring-4 ring-red-300"
          : "border-transparent hover:border-blue-400",
      )}
    >
      <Image
        src={url}
        alt={`Nike shoe option - ${url}`}
        fill
        className="object-cover object-center rotate-6"
      />
    </button>
  );
}
