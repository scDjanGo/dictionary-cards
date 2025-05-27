"use client";

import { useState, useEffect } from "react";
import { CardType } from "@/lib/types/types";
import ReplayIcon from "@mui/icons-material/Replay";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grow,
  ButtonBase,
  Button,
} from "@mui/material";

const PRIMARY_COLOR = "#1976D2";
const PRIMARY_LIGHT = "#E3F2FD";
const PRIMARY_BACK = "#E0ECF9";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Play_Quiz_Swipe_Type({
  cards,
  random,
}: {
  cards: CardType[];
  random: boolean;
}) {
  const [cardDeck, setCardDeck] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setCardDeck(random ? shuffleArray(cards) : [...cards]);
  }, [cards, random]);

  const handleFlip = () => {
    setFlipped(true);
  };

  const handleSwipe = (direction: "left" | "right") => {
    if (!cardDeck.length) return;

    const current = cardDeck[0];
    let newDeck = cardDeck.slice(1);

    if (direction === "left") {
      newDeck = [...newDeck, current];
      if (random) {
        newDeck = shuffleArray(newDeck);
      }
    }

    setCardDeck(newDeck);
    setFlipped(false);
  };

  const currentCard = cardDeck[0];

  if (!currentCard) {
    return (
      <Box
        mt={6}
        p={4}
        bgcolor="#E3F2FD"
        borderRadius={4}
        textAlign="center"
        boxShadow={3}
      >
        <EmojiEventsIcon sx={{ fontSize: 60, color: "#1976D2", mb: 1 }} />
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Все карточки просмотрены!
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Отличная работа — ты справился!
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: "#1976D2",
            "&:hover": { bgcolor: "#115293" },
            textTransform: "none",
            px: 3,
            py: 1,
            fontWeight: 500,
          }}
          onClick={() => router.push("/my-cards")}
        >
          Перейти к моим карточкам
        </Button>
      </Box>
    );
  }

  return (
    <Box
      mt={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="300px"
    >
      <Grow in>
        <Card
          sx={{
            width: "100%",
            maxWidth: 400,
            p: 2,
            bgcolor: flipped ? PRIMARY_BACK : PRIMARY_LIGHT,
            cursor: "pointer",
            userSelect: "none",
            boxShadow: 3,
            borderRadius: 2,
            transition: "background-color 0.3s ease",
          }}
          onClick={!flipped ? handleFlip : undefined}
        >
          <CardContent>
            {!flipped ? (
              <>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ textAlign: "center", color: PRIMARY_COLOR }}
                >
                  {currentCard.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  {currentCard.intlName}
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ textAlign: "center", color: PRIMARY_COLOR }}
                >
                  {currentCard.name} / {currentCard.intlName}
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  color="text.primary"
                  sx={{ textAlign: "center" }}
                >
                  {currentCard.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  {currentCard.intlDescription}
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={3}>
                  <ButtonBase
                    onClick={() => handleSwipe("left")}
                    sx={{
                      flex: 1,
                      py: 1.5,
                      px: 2,
                      bgcolor: "#BBDEFB",
                      textAlign: "center",
                      borderRadius: 2,
                      mr: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      fontWeight: 500,
                      color: PRIMARY_COLOR,
                    }}
                  >
                    <ReplayIcon fontSize="small" />
                    Вернуть
                  </ButtonBase>
                  <ButtonBase
                    onClick={() => handleSwipe("right")}
                    sx={{
                      flex: 1,
                      py: 1.5,
                      px: 2,
                      bgcolor: "#1976D2",
                      textAlign: "center",
                      borderRadius: 2,
                      ml: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      "&:hover": {
                        bgcolor: "#115293",
                      },
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#FFFFFF" }}
                    />
                    Правильно
                  </ButtonBase>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      </Grow>
    </Box>
  );
}
