export default function CardEstudios({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex w-[400px] flex-col rounded-4xl py-5">
      <img alt="Estudios" className="mx-auto" src={image} />
      <p className="mx-5 py-2 text-center text-2xl font-bold text-[#1F648B]">{title}</p>
      <p className="mx-5 text-center text-sm font-normal">{description}</p>
    </div>
  );
}
