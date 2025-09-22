"use client";

import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import DefaultDictionary_Words from "@/lib/data/dictionary-words.json";
import Default_Card from "../cards/Default_Card";
import Active_Header from "../header/Active_Header";
import { useEffect } from "react";
import { useToggle } from "@/features/hooks/useToggle";
import { usePathname } from "next/navigation";
import { useCurrentCardsStore } from "@/lib/zustand";

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
          <Default_Card key={word.id} data={word as any} />
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
