import { Button, Container, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, sm: 3 },
      }}
    >
      <Box sx={{ mb: { xs: 1, sm: 2 } }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Hello!
        </Typography>
        <Typography variant="h5" component="p" color="text.secondary">
          Have a great learning experience!
        </Typography>
      </Box>

      <Button
        variant="contained"
        size="large"
        component={Link}
        href="/categories" 
        sx={{
          fontSize: "clamp(1rem, 3vw, 1.2rem)",
          px: { xs: 3, sm: 4 },
          py: 1.5,
        }}
      >
        Start
      </Button>
    </Container>
  );
}
