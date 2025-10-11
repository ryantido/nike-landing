<<<<<<< Updated upstream
export default function Button({
  label = "Shop Now",
  icon: Icon,
}: {
  label?: string;
  icon?: React.ElementType;
=======
import { cn } from "@/lib/utils";

export default function Button({
  label = "Shop Now",
  icon: Icon,
  className = "",
}: {
  label?: string;
  icon?: React.ElementType;
  className?: string;
>>>>>>> Stashed changes
}) {
  return (
    <button
      aria-label={label}
<<<<<<< Updated upstream
      className="bg-red-500 py-3 px-7 flex items-center rounded-full gap-4 text-white text-lg font-bold 
      cursor-pointer hover:bg-red-600 transition-colors duration-300 ease-in-out "
=======
      className={cn(
        "bg-red-500 py-3 px-7 flex items-center rounded-full gap-4 text-white text-lg font-bold",
        "cursor-pointer hover:bg-red-600 transition-colors duration-300 ease-in-out flex",
        "justify-center items-center",
        className,
      )}
>>>>>>> Stashed changes
    >
      {label} {Icon && <Icon size={20} />}
    </button>
  );
}
