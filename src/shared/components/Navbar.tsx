import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    XGP Photo Page
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
                <Button color="inherit" component={RouterLink} to="/contact">Contacto</Button>
            </Toolbar>
        </AppBar>
    );
}
