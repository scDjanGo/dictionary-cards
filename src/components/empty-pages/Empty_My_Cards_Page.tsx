"use client";

import { useRouter } from "next/navigation";
import { Button, Typography, Container, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Empty_My_Cards_Page() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/create-card");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Typography
          variant="h5"
          color="#1976D2"
          fontWeight={600}
          textAlign="center"
        >
          Пусто
        </Typography>

        <Button
          variant="outlined"
          onClick={handleBack}
          endIcon={
            <ArrowBackIcon
              sx={{ transform: "rotate(180deg)" }}
            />
          }
          sx={{
            borderColor: "#1976D2",
            color: "#1976D2",
            "&:hover": {
              backgroundColor: "#1976D2",
              color: "#fff",
              borderColor: "#1976D2",
            },
          }}
        >
          Добавить карточку
        </Button>
      </Stack>
    </Container>
  );
}
