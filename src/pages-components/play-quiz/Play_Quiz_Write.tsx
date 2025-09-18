"use client";

import { useState, useEffect, useRef } from "react";
import { CardType } from "@/lib/types/types";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grow,
  TextField,
  Button,
} from "@mui/material";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";

const PRIMARY_COLOR = "#1976D2";
const PRIMARY_LIGHT = "#E3F2FD";
const PRIMARY_BACK = "#E0ECF9";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Play_Quiz_Write_Type({
  cards,
  random,
  errors,
  setErrors,
}: {
  cards: CardType[];
  random: boolean;
  errors: { count: number; cards: CardType[] };
  setErrors: React.Dispatch<
    React.SetStateAction<{ count: number; cards: CardType[] }>
  >;
}) {
  const [cardDeck, setCardDeck] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [input, setInput] = useState("");
  const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const continueButtonRef = useRef<HTMLButtonElement>(null);

  const quizSettings = useQuizSettingsStore((state) => state.quizSettingsStore);
  const router = useRouter();

  useEffect(() => {
    setCardDeck(random ? shuffleArray(cards) : [...cards]);
  }, [cards, random]);

  useEffect(() => {
    // Фокус на input при показе новой карточки
    if (!flipped) {
      inputRef.current?.focus();
    } else {
      continueButtonRef.current?.focus();
    }
  }, [flipped, cardDeck]);

  const currentCard = cardDeck[0];
  const correctAnswer =
    quizSettings.language === "en" ? currentCard?.intlName : currentCard?.name;

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentCard) return;

    const userAnswer = input.trim().toLowerCase();
    const correct = correctAnswer.trim().toLowerCase();

    setWasCorrect(userAnswer === correct);
    setFlipped(true);
  };

  const handleContinue = () => {
    if (!currentCard) return;

    let newDeck = cardDeck.slice(1);

    if (!wasCorrect) {
      newDeck = [...newDeck, currentCard];
      const isWas = errors.cards.some((item) => item.id === currentCard.id);

      setErrors((prev) => ({
        count: prev.count + 1,
        cards: isWas ? prev.cards : [...prev.cards, currentCard],
      }));
      if (random) newDeck = shuffleArray(newDeck);
    }

    setCardDeck(newDeck);
    setFlipped(false);
    setInput("");
    setWasCorrect(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (flipped && e.key === "Enter") {
      e.preventDefault();
      handleContinue();
    }
  };

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
        {errors?.count ? (
          <Typography variant="body1" color="text.secondary" mb={3}>
            Количество ошибок {errors?.count} <br />
            <span className={``}>
              Нужно повторить слова:{" "}
              {errors?.cards
                .map((item) =>
                  quizSettings.language === "en" ? item.name : item.intlName
                )
                .join(", ")}
            </span>
          </Typography>
        ) : (
          <Typography variant="body1" color="text.secondary" mb={3}>
            Отличная работа — ты справился!
          </Typography>
        )}
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
      onKeyDown={handleKeyDown}
    >
      <Grow in>
        <Card
          sx={{
            width: "100%",
            maxWidth: 400,
            p: 2,
            bgcolor: flipped ? PRIMARY_BACK : PRIMARY_LIGHT,
            userSelect: "none",
            boxShadow: 3,
            borderRadius: 2,
            transition: "background-color 0.3s ease",
          }}
        >
          <CardContent>
            {!flipped ? (
              <form onSubmit={handleAnswerSubmit}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ textAlign: "center", color: PRIMARY_COLOR }}
                >
                  {quizSettings.language === "en"
                    ? currentCard.name
                    : currentCard.intlName}
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Введите ответ..."
                  value={input}
                  inputRef={inputRef}
                  onChange={(e) => setInput(e.target.value)}
                  sx={{ mt: 2 }}
                />
              </form>
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
                  color={wasCorrect ? "success.main" : "error.main"}
                  textAlign="center"
                  sx={{ my: 2 }}
                >
                  {wasCorrect ? "Правильно!" : "Неправильно, попробуй снова."}
                </Typography>

                <Box textAlign="center">
                  <Button
                    variant="contained"
                    onClick={handleContinue}
                    ref={continueButtonRef}
                    sx={{
                      mt: 2,
                      textTransform: "none",
                      bgcolor: PRIMARY_COLOR,
                      "&:hover": { bgcolor: "#115293" },
                      px: 4,
                      py: 1,
                      fontWeight: 500,
                    }}
                  >
                    Продолжить
                  </Button>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      </Grow>
    </Box>
  );
}
