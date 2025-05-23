"use client";

import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Default_Card from "@/components/cards/Default_Card";

export default function My_Cards_Component() {
  const [myCards, setMyCards] = useState<any>([]);

  useEffect(() => {
    const userCards = JSON.parse(localStorage.getItem("my-cards") || "[]");

    setMyCards(userCards);
  }, []);

  return (
    <Box
      marginTop={"12px"}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {myCards.map((word: any) => (
        <Box
          key={word.id}
          width={{ xs: "100%", sm: "48%", md: "31%", lg: "23%" }}
        >
          <Card
            sx={{
              background: "linear-gradient(to bottom right, #e3f2fd, #bbdefb)",
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
  );
}
