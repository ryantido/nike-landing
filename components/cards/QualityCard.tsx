/**
 * A QualityCard component is used to represent a quality item in a website.
 * It receives three props: title, description, and icon.
 * The title is the name of the quality item, the description is a brief explanation of the quality item,
 * and the icon is a string representing the icon to be used for the quality item.
 * The component returns a div with a rounded background, a padding of 6, and a shadow.
 * The div contains a span with a red background, a padding of 2, and a rounded shape.
 */
export default function QualityCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-lg p-6 space-y-3 shadow-lg border border-gray-200">
      <span className="inline-block p-2 bg-red-400 rounded-full">
        <Icon size={20} color="white" />
      </span>
      <h4 className="text-2xl lg:text-3xl font-semibold">{title}</h4>
      <p className="text-description">{description}</p>
    </div>
  );
}
