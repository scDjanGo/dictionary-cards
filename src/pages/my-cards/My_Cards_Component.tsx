"use client";

import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import Default_Card from "@/components/cards/Default_Card";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { setCurrentCards } from "@/lib/redux/slices/currentCardsSlice/currentCardsSlice";
import { CardType } from "@/lib/types/types";
import Empty_My_Cards_Page from "@/components/empty-pages/Empty_My_Cards_Page";
import Active_Header from "@/components/Active_Header";
import { useToggle } from "@/features/hooks/useToggle";

export default function My_Cards_Component() {
  const dispatch = useAppDispatch();
  const currentCards = useAppSelector((state) => state.currentCardsSlice.value);
  const [render, setRender] = useToggle();

  useEffect(() => {
    const userCards: CardType[] = JSON.parse(
      localStorage.getItem("my-cards") || "[]"
    );
    const basket_cards: CardType[] = JSON.parse(
      localStorage.getItem("basket-cards") || "[]"
    );
    if (!basket_cards.length) {
      dispatch(setCurrentCards(userCards));
      setRender(true);
      return;
    }

    dispatch(
      setCurrentCards(
        userCards.filter(
          (item) => !basket_cards.some((elem) => elem.id === item.id)
        )
      )
    );
    setRender(true);
  }, []);

  if (!render) return;

  return (
    <>
      <Active_Header currentCards={currentCards} />
      {currentCards.length ? (
        <Box
          marginTop={"12px"}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}
        >
          {currentCards.map((word: any) => (
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
      ) : (
        <Empty_My_Cards_Page />
      )}
    </>
  );
}
