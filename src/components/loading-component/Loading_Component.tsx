"use client";

import { Box, CircularProgress, Typography, Backdrop } from "@mui/material";

interface LoadingOverlayProps {
  open: boolean;
  message?: string;
}

export default function Loading_Component({
  open,
  message = "Загрузка...",
}: LoadingOverlayProps) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.modal + 1,
        flexDirection: "column",
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
      <Typography mt={2} fontWeight="bold" textAlign="center">
        {message}
      </Typography>
    </Backdrop>
  );
}
