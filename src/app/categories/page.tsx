import { Button, Box, Stack } from "@mui/material";
import Link from "next/link";

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
  ];

  const other_categories = [
    {
      id: 6,
      name: "Blocked",
      intlName: "Заблокированные",
      childCategories: [],
    },
    {
      id: 7,
      name: "My cards",
      intlName: "Мои карты",
      childCategories: [],
    },
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
      {categories.map((item) => (
        <Link
          className={``}
          href={`/categories/${item.id}`}
          key={item.id}
          passHref
        >
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
      
      {other_categories.map((item) => (
        <Link
          className={``}
          href={`/categories/${item.id}`}
          key={item.id}
          passHref
        >
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
