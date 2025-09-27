// "use client";

// import { useState, useEffect } from "react";
// import { CardType } from "@/lib/types/types";
// import { useRouter } from "next/navigation";
// import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Grow,
//   ButtonBase,
//   Button,
// } from "@mui/material";
// import ReplayIcon from "@mui/icons-material/Replay";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import FlipIcon from "@mui/icons-material/Flip";

// const PRIMARY_COLOR = "#1976D2";
// const PRIMARY_LIGHT = "#E3F2FD";
// const PRIMARY_BACK = "#E0ECF9";

// function shuffleArray<T>(array: T[]): T[] {
//   return [...array].sort(() => Math.random() - 0.5);
// }

// export default function Play_Quiz_Speech_Type({
//   cards,
//   random,
//   errors,
//   setErrors,
// }: {
//   cards: CardType[];
//   random: boolean;
//   errors: { count: number; cards: CardType[] };
//   setErrors: React.Dispatch<
//     React.SetStateAction<{ count: number; cards: CardType[] }>
//   >;
// }) {
//   const [cardDeck, setCardDeck] = useState<CardType[]>([]);
//   const [flipped, setFlipped] = useState(false);
//   const [revealed, setRevealed] = useState(false);
//   const quizSettings = useQuizSettingsStore((state) => state.quizSettingsStore);
//   const router = useRouter();

//   useEffect(() => {
//     setCardDeck(random ? shuffleArray(cards) : [...cards]);
//   }, [cards, random]);

//   const currentCard = cardDeck[0];

//   const speak = (text: string, lang: string) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = lang;

//     const voices = window.speechSynthesis.getVoices();
//     const voice = voices.find((v) => v.lang === lang);
//     if (voice) utterance.voice = voice;

//     window.speechSynthesis.cancel(); // остановить предыдущее
//     window.speechSynthesis.speak(utterance);
//   };

//   useEffect(() => {
//     if (!currentCard || flipped) return;
//     const textToSpeak =
//       quizSettings.language === "en" ? currentCard.name : currentCard.intlName;
//     const lang = quizSettings.language === "en" ? "en-US" : "ru-RU";
//     speak(textToSpeak, lang);
//   }, [currentCard, flipped, quizSettings.language]);

//   const handleFlip = () => {
//     setFlipped(true);
//   };

//   const handleSwipe = (direction: "left" | "right") => {
//     if (!cardDeck.length) return;

//     const current = cardDeck[0];
//     let newDeck = cardDeck.slice(1);

//     if (direction === "left") {
//       newDeck = [...newDeck, current];
//       const isWas = errors.cards.some((item) => item.id === current.id);

//       setErrors((prev) => ({
//         count: prev.count + 1,
//         cards: isWas ? prev.cards : [...prev.cards, current],
//       }));
//       if (random) {
//         newDeck = shuffleArray(newDeck);
//       }
//     }

//     setCardDeck(newDeck);
//     setFlipped(false);
//     setRevealed(false);
//   };

//   if (!currentCard) {
//     return (
//       <Box
//         mt={6}
//         p={4}
//         bgcolor="#E3F2FD"
//         borderRadius={4}
//         textAlign="center"
//         boxShadow={3}
//       >
//         <EmojiEventsIcon sx={{ fontSize: 60, color: "#1976D2", mb: 1 }} />
//         <Typography variant="h5" fontWeight="bold" mb={1}>
//           Все карточки просмотрены!
//         </Typography>
//         {errors?.count ? (
//           <Typography variant="body1" color="text.secondary" mb={3}>
//             Количество ошибок {errors?.count} <br />
//             <span className={``}>
//               Нужно повторить слова:{" "}
//               {errors?.cards
//                 .map((item) =>
//                   quizSettings.language === "en" ? item.name : item.intlName
//                 )
//                 .join(", ")}
//             </span>
//           </Typography>
//         ) : (
//           <Typography variant="body1" color="text.secondary" mb={3}>
//             Отличная работа — ты справился!
//           </Typography>
//         )}
//         <Button
//           variant="contained"
//           endIcon={<ArrowForwardIcon />}
//           sx={{
//             bgcolor: "#1976D2",
//             "&:hover": { bgcolor: "#115293" },
//             textTransform: "none",
//             px: 3,
//             py: 1,
//             fontWeight: 500,
//           }}
//           onClick={() => router.push("/my-cards")}
//         >
//           Перейти к моим карточкам
//         </Button>
//       </Box>
//     );
//   }

//   const lang = quizSettings.language === "en" ? "en-US" : "ru-RU";
//   const cardTitle =
//     quizSettings.language === "en" ? currentCard.name : currentCard.intlName;
//   const cardDesc =
//     quizSettings.language === "en"
//       ? currentCard.description
//       : currentCard.intlDescription;

//   return (
//     <Box
//       mt={4}
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       flexDirection="column"
//       minHeight="300px"
//     >
//       <Grow in>
//         <Card
//           sx={{
//             width: "100%",
//             maxWidth: 400,
//             p: 2,
//             bgcolor: flipped ? PRIMARY_BACK : PRIMARY_LIGHT,
//             userSelect: "none",
//             boxShadow: 3,
//             borderRadius: 2,
//           }}
//         >
//           <CardContent>
//             {!flipped ? (
//               <>
//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{
//                     textAlign: "center",
//                     color: PRIMARY_COLOR,
//                     filter: revealed ? "none" : "blur(6px)",
//                     transition: "filter 0.3s ease",
//                   }}
//                 >
//                   {cardTitle}
//                 </Typography>

//                 <Box
//                   display="flex"
//                   flexWrap={"wrap"}
//                   justifyContent="space-between"
//                   mt={3}
//                   gap={1}
//                 >
//                   <ButtonBase
//                     onClick={() => speak(cardTitle, lang)}
//                     sx={buttonStyle()}
//                   >
//                     <VolumeUpIcon fontSize="small" />
//                     Озвучить
//                   </ButtonBase>
//                   <ButtonBase
//                     onClick={() => setRevealed(true)}
//                     sx={buttonStyle()}
//                   >
//                     <VisibilityIcon fontSize="small" />
//                     Показать
//                   </ButtonBase>
//                   <ButtonBase onClick={handleFlip} sx={buttonStyle()}>
//                     <FlipIcon fontSize="small" />
//                     Перевернуть
//                   </ButtonBase>
//                 </Box>
//               </>
//             ) : (
//               <>
//                 <Typography
//                   variant="h6"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{ textAlign: "center", color: PRIMARY_COLOR }}
//                 >
//                   {currentCard.name} / {currentCard.intlName}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   paragraph
//                   color="text.primary"
//                   sx={{ textAlign: "center" }}
//                 >
//                   {currentCard.description}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ textAlign: "center" }}
//                 >
//                   {currentCard.intlDescription}
//                 </Typography>

//                 <Box display="flex"  justifyContent="space-between" gap={1} mt={3}>
//                   <ButtonBase
//                     onClick={() => handleSwipe("left")}
//                     sx={buttonStyle("light")}
//                   >
//                     <ReplayIcon fontSize="small" />
//                     Вернуть
//                   </ButtonBase>
//                   <ButtonBase
//                     onClick={() => handleSwipe("right")}
//                     sx={buttonStyle("primary")}
//                   >
//                     <CheckCircleIcon fontSize="small" />
//                     Правильно
//                   </ButtonBase>
//                 </Box>
//               </>
//             )}
//           </CardContent>
//         </Card>
//       </Grow>
//     </Box>
//   );
// }

// function buttonStyle(type: "primary" | "light" = "light") {
//   return {
//     flex: 1,
//     py: 1.5,
//     px: 2,
//     textAlign: "center",
//     borderRadius: 2,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 1,
//     fontWeight: 500,
//     bgcolor: type === "primary" ? "#1976D2" : "#BBDEFB",
//     color: type === "primary" ? "#FFFFFF" : PRIMARY_COLOR,
//     "&:hover": {
//       bgcolor: type === "primary" ? "#115293" : "#A3C8F0",
//     },
//   };
// }

"use client";

import { useState, useEffect } from "react";
import { CardType } from "@/lib/types/types";
import { useRouter } from "next/navigation";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";
import {
  Trophy,
  ArrowRight,
  Volume2,
  Eye,
  RotateCcw,
  CheckCircle2,
  Rotate3d,
} from "lucide-react";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Play_Quiz_Speech_Type({
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
  const [revealed, setRevealed] = useState(false);
  const quizSettings = useQuizSettingsStore((state) => state.quizSettingsStore);
  const router = useRouter();

  useEffect(() => {
    setCardDeck(random ? shuffleArray(cards) : [...cards]);
  }, [cards, random]);

  const currentCard = cardDeck[0];

  const speak = (text: string, lang: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) => v.lang === lang);
    if (voice) utterance.voice = voice;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (!currentCard || flipped) return;
    const textToSpeak =
      quizSettings.language === "en" ? currentCard.name : currentCard.intlName;
    const lang = quizSettings.language === "en" ? "en-US" : "ru-RU";
    speak(textToSpeak, lang);
  }, [currentCard, flipped, quizSettings.language]);

  const handleFlip = () => setFlipped(true);

  const handleSwipe = (direction: "left" | "right") => {
    if (!cardDeck.length) return;

    const current = cardDeck[0];
    let newDeck = cardDeck.slice(1);

    if (direction === "left") {
      newDeck = [...newDeck, current];
      const isWas = errors.cards.some((item) => item.id === current.id);

      setErrors((prev) => ({
        count: prev.count + 1,
        cards: isWas ? prev.cards : [...prev.cards, current],
      }));

      if (random) newDeck = shuffleArray(newDeck);
    }

    setCardDeck(newDeck);
    setFlipped(false);
    setRevealed(false);
  };

  if (!currentCard) {
    return (
      <div className="mt-[10%] p-6 bg-blue-50 dark:bg-bgItem rounded-2xl shadow text-center">
        <Trophy className="w-14 h-14 text-blue-600 dark:text-bgLight mx-auto mb-2" />
        <h2 className="text-xl font-bold mb-2 dark:text-bgLight">Все карточки просмотрены!</h2>

        {errors?.count ? (
          <p className="text-gray-600 dark:text-bgLight mb-4">
            Количество ошибок: {errors?.count} <br />
            Нужно повторить слова:{" "}
            {errors?.cards
              .map((item) =>
                quizSettings.language === "en" ? item.name : item.intlName
              )
              .join(", ")}
          </p>
        ) : (
          <p className="text-gray-600 mb-4 dark:text-bgLight">Отличная работа — ты справился!</p>
        )}

        <button
          onClick={() => router.push("/my-cards")}
          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 dark:bg-bgItem dark:border-[1px] dark:border-bgLight dark:hover:text-bgItem dark:hover:bg-bgLight  text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Перейти к моим карточкам
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const lang = quizSettings.language === "en" ? "en-US" : "ru-RU";
  const cardTitle =
    quizSettings.language === "en" ? currentCard.name : currentCard.intlName;

  return (
    <div className="mt-[10%] flex flex-col items-center min-h-[300px]">
      <div
        className={`w-full max-w-sm rounded-xl shadow-lg p-4 transition-colors duration-300 bg-blue-50 dark:bg-bgItem`}
      >
        {!flipped ? (
          <>
            <h3
              className={`text-center font-bold text-xl mb-7 text-blue-700 dark:text-bgLight transition ${
                revealed ? "blur-0" : "blur-sm"
              }`}
            >
              {cardTitle}
            </h3>

            <div className="flex flex-wrap justify-between gap-2 mt-3">
              <button
                onClick={() => speak(cardTitle, lang)}
                className={`${buttonStyle()}`}
              >
                <Volume2 className="w-4 h-4" />
                Озвучить
              </button>
              <button
                onClick={() => setRevealed(true)}
                className={buttonStyle()}
              >
                <Eye className="w-4 h-4" />
                Показать
              </button>
              <button onClick={handleFlip} className={buttonStyle()}>
                <Rotate3d className="w-4 h-4" />
                Перевернуть
              </button>
            </div>
          </>
        ) : (
          <>
            <h4 className="text-center font-bold text-lg mb-2 text-blueCl dark:text-bgLight dark:pb-2 dark:border-b-[1px] dark:border-bgLight ">
              {currentCard.name} / {currentCard.intlName}
            </h4>
            <p className="text-center text-gray-800 mb-2 pb-2 dark:text-bgLight dark:border-b-[1px] dark:border-dashed  ">
              {currentCard.description}
            </p>
            <p className="text-center text-gray-500 dark:text-bgLight">
              {currentCard.intlDescription}
            </p>

            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={() => handleSwipe("left")}
                className={buttonStyle("light")}
              >
                <RotateCcw className="w-4 h-4" />
                Вернуть
              </button>
              <button
                onClick={() => handleSwipe("right")}
                className={buttonStyle("primary")}
              >
                <CheckCircle2 className="w-4 h-4" />
                Правильно
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function buttonStyle(type: "primary" | "light" = "light") {
  return [
    "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium transition",
    type === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-blue-100 text-blue-700 hover:bg-blue-200",
      
      "dark:bg-bgItem dark:border-[1px] dark:text-bgLight dark:border-bgLight dark:hover:bg-bgLight dark:hover:text-bgItem"
  ].join(" ");
}
