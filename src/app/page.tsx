// import { Button, Container, Typography, Box } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         px: { xs: 2, sm: 3 },
//       }}
//     >
//       <Box sx={{ mb: { xs: 1, sm: 2 } }}>
//         <Typography variant="h1" component="h1" gutterBottom>
//           Hello!
//         </Typography>
//         <Typography variant="h5" component="p" color="text.secondary">
//           Have a great learning experience!
//         </Typography>
//       </Box>

//       <Button
//         variant="contained"
//         size="large"
//         component={Link}
//         href="/categories"
//         sx={{
//           fontSize: "clamp(1rem, 3vw, 1.2rem)",
//           px: { xs: 3, sm: 4 },
//           py: 1.5,
//         }}
//       >
//         Start
//       </Button>
//     </Container>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  LinearProgress,
  Slide,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimate(true), 300); // старт анимации
    const timer2 = setTimeout(() => router.push("/categories"), 1000); // переход

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [router]);

  return (
    <Slide
      in={!animate}
      direction="down"
      timeout={{ enter: 300, exit: 400 }}
      mountOnEnter
      unmountOnExit
    >
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
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ mb: { xs: 1, sm: 2 } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            Getting things ready for you...
          </Typography>
        </Box>

        <Box sx={{ width: "100%", mt: 4 }}>
          <LinearProgress color="primary" />
        </Box>
      </Container>
    </Slide>
  );
}
