import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../../shared/components/Navbar";
import ImageCarousel from "../components/ImageCarousel";

export default function HomePage() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                color: "text.primary",
            }}
        >
            {/* 🔹 Carrusel de fondo */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <ImageCarousel />
            </Box>

            {/* 🔹 Navbar sobre el carrusel
            <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}>
                <Navbar />
            </Box> */}

            {/* 🔹 Contenido principal sobre el carrusel */}
            <Container
                maxWidth="md"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    py: 8,
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                {/* <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
                    }}
                >
                    Inicio
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        mt: 2,
                        textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                    }}
                >
                    Bienvenido a <strong>XGP Photo Page</strong>
                </Typography> */}
            </Container>
        </Box>
    );
}
