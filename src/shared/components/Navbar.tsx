import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface NavItem {
    label: string,
    path: string
}

export default function Navbar() {
    // 🔹 Declaras aquí tus botones de navegación
    const navItems: NavItem[] = [
        // { label: "Inicio", path: "/" },
        // { label: "Contacto", path: "/contact" },
    ];

    const hasButtons = navItems.length > 0;

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
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: hasButtons ? "flex-start" : "flex-end", // 🔹 posición dinámica
                }}
            >
                {/* 🔹 Logo clickeable (hover solo en la imagen) */}
                <IconButton
                    component={RouterLink}
                    to="/"
                    disableRipple
                    sx={{
                        p: 0,
                        mr: hasButtons ? 2 : 0, // 🔹 solo margen si hay botones
                        "&:hover": { background: "transparent" },
                    }}
                >
                    <Box
                        component="img"
                        src="/images/header-home.png"
                        alt="XGP PHOTO PAGE"
                        sx={{
                            height: { xs: 72, sm: 84, md: 96 },
                            width: "auto",
                            display: "block",
                            transition: "transform 0.3s ease, opacity 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                                opacity: 0.9,
                            },
                        }}
                    />
                </IconButton>

                {/* 🔹 Si hay botones, se renderizan y el logo queda a la izquierda */}
                {hasButtons && (
                    <>
                        <Box sx={{ flexGrow: 1 }} />
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                component={RouterLink}
                                to={item.path}
                                sx={{ fontWeight: 600 }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}
