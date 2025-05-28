"use client";

import { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Typography,
  Box,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import TranslateIcon from "@mui/icons-material/Translate";
import TimerIcon from "@mui/icons-material/Timer";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import EditIcon from "@mui/icons-material/Edit";
import MicIcon from "@mui/icons-material/Mic";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/navigation";
import { QuizSettingsType } from "@/lib/types/types";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";

export default function Quiz_Main_Page() {
  const router = useRouter();
  const setQuizSettingsStore = useQuizSettingsStore(
    (state) => state.setQuizSettingsStore
  );
  const [quizSettings, setQuizSettings] = useState<QuizSettingsType>({
    language: "en",
    time: false,
    type: "swipe",
    random: true,
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const quiz_cards = JSON.parse(sessionStorage.getItem("quiz-cards") || "[]");

    if (Array.isArray(quiz_cards) && !quiz_cards.length) {
      if (window.history.length <= 1) {
        router.push("/categories");
      } else {
        router.back();
      }
    }
  }, []);

  const handleChange = (
    key: keyof QuizSettingsType,
    value: QuizSettingsType[keyof QuizSettingsType]
  ) => {
    setQuizSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleStartQuiz = () => {
    sessionStorage.setItem("quiz-settings", JSON.stringify(quizSettings));
    localStorage.setItem("quiz-settings", JSON.stringify(quizSettings));
    setQuizSettingsStore(quizSettings);
    router.push(`/quiz/play`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: isSmallScreen ? 2 : 4,
          borderRadius: 3,
          background: "linear-gradient(to right, #E3F2FD, #FFFFFF)",
        }}
      >
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          color="primary"
        >
          Настройки квиза
        </Typography>

        {/* Language Selection */}
        <Box mt={4}>
          <FormControl fullWidth>
            <FormLabel sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <TranslateIcon sx={{ mr: 1 }} />
              Язык
            </FormLabel>
            <RadioGroup
              row
              value={quizSettings.language}
              onChange={(e) =>
                handleChange("language", e.target.value as "ru" | "en")
              }
            >
              <FormControlLabel
                value="en"
                control={<Radio />}
                label="Английский"
              />
              <FormControlLabel
                value="ru"
                control={<Radio />}
                label="Русский"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Timer */}
        {/* <Box mt={4}>
          <FormControlLabel
            control={
              <Switch
                checked={quizSettings.time}
                onChange={(e) => handleChange("time", e.target.checked)}
              />
            }
            label={
              <Box display="flex" alignItems="center">
                <TimerIcon sx={{ mr: 1 }} />
                Использовать таймер
              </Box>
            }
          />
        </Box> */}
        <Box mt={4}>
          <FormControlLabel
            control={
              <Switch
                checked={quizSettings.random}
                onChange={(e) => handleChange("random", e.target.checked)}
              />
            }
            label={
              <Box display="flex" alignItems="center">
                <TouchAppIcon sx={{ mr: 1 }} />
                Случайный порядок карточек
              </Box>
            }
          />
        </Box>

        {/* Type Selection */}
        <Box mt={4}>
          <FormControl fullWidth>
            <FormLabel sx={{ mb: 1 }}>Тип квиза</FormLabel>
            <RadioGroup
              row={!isSmallScreen}
              value={quizSettings.type}
              onChange={(e) =>
                handleChange(
                  "type",
                  e.target.value as "swipe" | "write" | "speak"
                )
              }
            >
              <FormControlLabel
                value="swipe"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <TouchAppIcon sx={{ mr: 0.5 }} />
                    Swipe
                  </Box>
                }
              />
              <FormControlLabel
                value="write"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <EditIcon sx={{ mr: 0.5 }} />
                    Write
                  </Box>
                }
              />
              {/* <FormControlLabel
                value="speak"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <MicIcon sx={{ mr: 0.5 }} />
                    Speak
                  </Box>
                }
              /> */}
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Start Button */}
        <Box mt={5} textAlign="center">
          <Button
            variant="contained"
            size={isSmallScreen ? "medium" : "large"}
            endIcon={<PlayArrowIcon />}
            onClick={handleStartQuiz}
            sx={{
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              fontSize: isSmallScreen ? "1rem" : "1.1rem",
              borderRadius: 2,
              background: "linear-gradient(to right, #1976D2, #2196F3)",
              color: "#fff",
              "&:hover": {
                background: "linear-gradient(to right, #1565C0, #1E88E5)",
              },
            }}
          >
            Начать квиз
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
