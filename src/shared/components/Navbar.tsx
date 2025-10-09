import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar position="sticky" elevation={4}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "primary.main",
                    }}
                >
                    XGP PHOTO PAGE
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Inicio
                </Button>
                <Button color="inherit" component={RouterLink} to="/contact">
                    Contacto
                </Button>
            </Toolbar>
        </AppBar>
    );
}
