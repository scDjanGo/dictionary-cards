"use client";

import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import DefaultDictionary_Words from "@/lib/data/dictionary-words.json";
import Default_Card from "../cards/Default_Card";
import Active_Header from "../Active_Header";
import { useCurrentCardsStore } from "@/lib/zustand/useCurrentCardsStore";
import { useEffect } from "react";
import { useToggle } from "@/features/hooks/useToggle";
import { usePathname } from "next/navigation";

export default function Subcategory_Cards_Container({
  subcategory,
}: {
  subcategory?: string;
}) {
  const pathname = usePathname();
  const currentCards = useCurrentCardsStore((state) => state.currentCards);
  const setCurrentCards = useCurrentCardsStore(
    (state) => state.setCurrentCards
  );
  const [render, setRender] = useToggle(false);

  useEffect(() => {
    const Filter_Dictionary: any[] = subcategory
      ? DefaultDictionary_Words.filter(
          (item) => item.catId === Number(subcategory)
        )
      : DefaultDictionary_Words;

    setCurrentCards(Filter_Dictionary);
    setRender(true);
  }, [pathname]);

  if (!render) return;

  return (
    <>
      <Active_Header currentCards={currentCards} />
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {currentCards.map((word) => (
          <Box
            key={word.id}
            width={{ xs: "100%", sm: "48%", md: "31%", lg: "23%" }}
          >
            <Card
              sx={{
                background:
                  "linear-gradient(to bottom right, #e3f2fd, #bbdefb)",
                borderRadius: "16px",
                boxShadow: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s ease-in-out",
                ":hover": {
                  transform: "scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              <Default_Card data={word as any} />
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
}

// <CardContent>
//   <Typography
//     variant="h6"
//     sx={{
//       color: "#0d47a1",
//       fontWeight: "bold",
//       textAlign: "center",
//     }}
//   >
//     {word.name}
//   </Typography>
//   <Typography
//     variant="subtitle2"
//     sx={{ color: "#0d47a1", mb: 1, textAlign: "center" }}
//   >
//     {word.intlName}
//   </Typography>
//   <Typography variant="body2" sx={{ mb: 1 }}>
//     {word.description}
//   </Typography>
//   <Typography variant="body2" color="text.secondary">
//     {word.intlDescription}
//   </Typography>
// </CardContent>
