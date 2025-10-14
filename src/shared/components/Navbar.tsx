import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar
            position="absolute"
            elevation={0}
            sx={{
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(4px)",
                color: "#fff",
                boxShadow: "none",
                borderBottom: "none",
            }}
        >
            <Toolbar>
                {/* 🔹 Logo clickeable (hover solo en la imagen) */}
                <IconButton
                    component={RouterLink}
                    to="/"
                    disableRipple
                    sx={{
                        p: 0,
                        mr: 2,
                        "&:hover": { background: "transparent" },
                    }}
                >
                    <Box
                        component="img"
                        src="/images/header-logo.png"
                        alt="XGP PHOTO PAGE"
                        sx={{
                            height: { xs: 48, sm: 56, md: 64 },
                            width: "auto",
                            display: "block",
                            transition: "transform 0.3s ease, opacity 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)", // 🔹 efecto zoom suave
                                opacity: 0.9,              // 🔹 leve atenuación
                            },
                        }}
                    />
                </IconButton>


                <Box sx={{ flexGrow: 1 }} />

                {/* 🔹 Botones de navegación */}
                <Button
                    color="inherit"
                    component={RouterLink}
                    to="/"
                    sx={{ fontWeight: 600 }}
                >
                    Inicio
                </Button>
                <Button
                    color="inherit"
                    component={RouterLink}
                    to="/contact"
                    sx={{ fontWeight: 600 }}
                >
                    Contacto
                </Button>
            </Toolbar>
        </AppBar>
    );
}
