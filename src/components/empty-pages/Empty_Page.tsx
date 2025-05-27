"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Empty_Page() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push("/categories");
    }
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
          startIcon={<ArrowBackIcon />}
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
          Назад
        </Button>
      </Stack>
    </Container>
  );
}
