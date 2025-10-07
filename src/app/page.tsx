import Link from "next/link";

export default function HomePage() {
  const LINKS = [
    { id: 1, name: "Cards", intlName: "Категория", link: "cards" },
  ];

  return (
    <main className="flex flex-col items-center justify-center  gap-6 ">
      <div className="flex flex-col gap-4 w-full">
        {LINKS.map((item) => (
          <Link key={item.id} href={item.link} className="block w-full">
            <span
              className="relative flex justify-center items-center gap-2 w-full px-6 py-4 text-lg font-bold text-white 
                   bg-blueCl dark:bg-bgItem rounded-2xl shadow-md cursor-pointer overflow-hidden group
                   transition-all duration-300 ease-in-out hover:scale-[1.02]"
            >
              <span className="relative z-10 flex flex-col items-center ">
                <span className="text-center">{item.name}</span>
                <span className="max-w-">------------</span>
                <span className="text-center">{item.intlName}</span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
