import Category_Card from "@/components/cards/Category_Card";
import Container_Categories from "@/components/containers/Container_Categories";

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: "Subject",
      intlName: "Существительное",
      childCategories: [],
    },
    {
      id: 2,
      name: "Verb",
      intlName: "Глагол",
      childCategories: [],
    },
    {
      id: 3,
      name: "Object",
      intlName: "Дополнение",
      childCategories: [],
    },
    {
      id: 4,
      name: "Place",
      intlName: "Место",
      childCategories: [],
    },
    {
      id: 5,
      name: "Time",
      intlName: "Время",
      childCategories: [],
    },
    {
      id: 6,
      name: "Past simple",
      intlName: "Прошедшее простое",
      childCategories: [],
    },
  ];

  const other_categories = [
    {
      id: 7,
      name: "My cards",
      intlName: "Мои карты",
      childCategories: [],
    },
    {
      id: 6,
      name: "Blocked",
      intlName: "Заблокированные",
      childCategories: [],
    },
  ];

  return (
    <Container_Categories>
      <Category_Card category={other_categories[0]} href="/my-cards" />

      {categories.map((item) => (
        <Category_Card
          key={item.id}
          category={item}
          href={`/categories/${item.id}`}
        />
      ))}

      <Category_Card category={other_categories[1]} href="/blocked-cards" />
    </Container_Categories>
  );
}
