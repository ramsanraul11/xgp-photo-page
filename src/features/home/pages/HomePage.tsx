import { Box, Container, Typography } from "@mui/material";
import ImageCarousel from "../components/ImageCarousel";

export default function HomePage() {
    return (
        <Box sx={{ backgroundColor: "background.default", color: "text.primary" }}>
            <Container sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Inicio
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Bienvenido a <strong>XGP Photo Page</strong>
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <ImageCarousel />
                </Box>
            </Container>
        </Box>
    );
}
