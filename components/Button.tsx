export default function Button({
  label = "Shop Now",
  icon: Icon,
}: {
  label?: string;
  icon?: React.ElementType;
}) {
  return (
    <button
      aria-label={label}
      className="bg-red-500 py-3 px-7 flex items-center rounded-full gap-4 text-white text-lg font-bold 
      cursor-pointer hover:bg-red-600 transition-colors duration-300 ease-in-out "
    >
      {label} {Icon && <Icon size={20} />}
    </button>
  );
}
