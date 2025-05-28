import { Button, Box, Stack } from "@mui/material";
import Link from "next/link";

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

    
    { id: 26, parentId: 6, name: "Irregular verbs", intlName: "Неправильные глаголы" },
    { id: 27, parentId: 6, name: "Regular verbs", intlName: "Правильные глаголы" },
  ];



  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {subcategories
        .filter((item) => item.parentId === Number(category))
        .map((item) => (
          <Link className={``} href={`/categories/${category}/${item.id}`} key={item.id} passHref>
            <Stack
              sx={{
                position: "relative",
                cursor: "pointer",
                "&:hover > *:first-child": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                },
                "&:active > *:first-child": {
                  transform: "translateY(0)",
                },
              }}
            >
              <Button
                className="line-clamp-2 flex flex-col gap-[5px]"
                variant="contained"
                sx={{
                  position: "relative",
                  zIndex: 3,
                  py: 2,
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  bgcolor: "primary.main",
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              >
                <span>{item.name}</span>
                <span>------------</span>
                {item.intlName}
              </Button>

              <Box
                sx={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "4px",
                  right: "4px",
                  height: "100%",
                  bgcolor: "primary.dark",
                  borderRadius: "8px",
                  zIndex: 2,
                  opacity: 0.7,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: "-8px",
                  left: "8px",
                  right: "8px",
                  height: "100%",
                  bgcolor: "primary.dark",
                  borderRadius: "8px",
                  zIndex: 1,
                  opacity: 0.4,
                }}
              />
            </Stack>
          </Link>
        ))}
    </Box>
  );
}
