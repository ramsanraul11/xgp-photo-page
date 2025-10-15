import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface LoadingOverlayProps {
    visible: boolean;
}

export default function LoadingOverlay({ visible }: LoadingOverlayProps) {
    if (!visible) return null;

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "#121212",
                zIndex: 3000,
                color: "white",
            }}
        >
            {/* Imagen del logo girando */}
            <Box
                component={motion.img}
                src="/images/header-logo.png" // ✅ Ruta desde public/
                alt="Cargando..."
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 2, // velocidad del giro
                }}
                sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            />

            <Typography variant="h6" sx={{ opacity: 0.8 }}>
                Cargando imágenes...
            </Typography>
        </Box>
    );
}
