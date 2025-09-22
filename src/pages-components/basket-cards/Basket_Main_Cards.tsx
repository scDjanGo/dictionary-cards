"use client";

import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Default_Card from "@/components/cards/Default_Card";
import Empty_Page from "@/components/empty-pages/Empty_Page";

import { useBlockedCardsStore } from "@/lib/zustand";

export default function Basket_Main_Cards() {
  const blockedCards = useBlockedCardsStore((state) => state.data);

  return blockedCards.length ? (
    <Box
      marginTop={"12px"}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {blockedCards.map((word) => (
        <Default_Card key={word.id} data={word} />
      ))}
    </Box>
  ) : (
    <Empty_Page />
  );
}
