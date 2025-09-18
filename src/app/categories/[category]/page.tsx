import Category_Card from "@/components/cards/Category_Card";

type typePage = {
  params: Promise<{ category: string }>;
};

export default async function page({ params }: typePage) {
  const { category } = await params;

  const subcategories = [
    // Subject (id: 1)
    { id: 1, parentId: 1, name: "People", intlName: "Люди" },
    { id: 2, parentId: 1, name: "Animals", intlName: "Животные" },
    { id: 3, parentId: 1, name: "Things", intlName: "Предметы" },
    { id: 4, parentId: 1, name: "Professions", intlName: "Профессии" },
    { id: 5, parentId: 1, name: "Family members", intlName: "Члены семьи" },

    // Verb (id: 2)
    {
      id: 6,
      parentId: 2,
      name: "Daily actions",
      intlName: "Ежедневные действия",
    },
    { id: 7, parentId: 2, name: "Movement", intlName: "Движение" },
    { id: 8, parentId: 2, name: "Thinking", intlName: "Мышление" },
    { id: 9, parentId: 2, name: "Speech", intlName: "Речь" },
    { id: 10, parentId: 2, name: "Feelings", intlName: "Чувства" },

    // Object (id: 3)
    { id: 11, parentId: 3, name: "Toys", intlName: "Игрушки" },
    {
      id: 12,
      parentId: 3,
      name: "School supplies",
      intlName: "Школьные принадлежности",
    },
    { id: 13, parentId: 3, name: "Food", intlName: "Еда" },
    { id: 14, parentId: 3, name: "Furniture", intlName: "Мебель" },
    { id: 15, parentId: 3, name: "Clothes", intlName: "Одежда" },

    // Place (id: 4)
    { id: 16, parentId: 4, name: "Home", intlName: "Дом" },
    { id: 17, parentId: 4, name: "City", intlName: "Город" },
    { id: 18, parentId: 4, name: "Nature", intlName: "Природа" },
    { id: 19, parentId: 4, name: "School", intlName: "Школа" },
    { id: 20, parentId: 4, name: "Shops", intlName: "Магазины" },

    // Time (id: 5)
    { id: 21, parentId: 5, name: "Days of the week", intlName: "Дни недели" },
    { id: 22, parentId: 5, name: "Months", intlName: "Месяцы" },
    { id: 23, parentId: 5, name: "Seasons", intlName: "Времена года" },
    { id: 24, parentId: 5, name: "Time of day", intlName: "Время суток" },
    { id: 25, parentId: 5, name: "Clock time", intlName: "Время на часах" },

    {
      id: 26,
      parentId: 6,
      name: "Irregular verbs",
      intlName: "Неправильные глаголы",
    },
    {
      id: 27,
      parentId: 6,
      name: "Regular verbs",
      intlName: "Правильные глаголы",
    },
  ];

  return (
    <div
      className={` mt-[6px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[6px_16px]`}
    >
      {subcategories.map((item) => (
        <Category_Card
          key={item.id}
          category={item}
          href={`/categories/${category}/${item.id}`}
        />
      ))}
    </div>
  );
}
