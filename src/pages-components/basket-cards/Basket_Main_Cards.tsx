"use client";

import Box from "@mui/material/Box";
import Default_Card from "@/components/cards/Default_Card";
import Empty_Page from "@/components/empty-pages/Empty_Page";

import { useBlockedCardsStore } from "@/lib/zustand";
import Container_Cards from "@/components/containers/Container_Cards";

export default function Basket_Main_Cards() {
  const blockedCards = useBlockedCardsStore((state) => state.data);

  return blockedCards.length ? (
    <Container_Cards />
  ) : (
    <Empty_Page />
  );
}
