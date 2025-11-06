export default function CardServices({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex w-[400px] flex-col justify-between rounded-4xl bg-white py-5">
      <img alt="Servicios" src={image} />
      <p className="mx-5 py-2 text-center text-xl font-semibold">{title}</p>
      <p className="mx-5 text-center">{description}</p>
    </div>
  );
}
