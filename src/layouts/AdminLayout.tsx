// src/layouts/AdminLayout.tsx
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function AdminLayout() {
    const { logout } = useAuth();

    return (
        <Box>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Panel de Administración
                    </Typography>
                    <Button color="inherit" component={RouterLink} to="/admin/projects">
                        Proyectos
                    </Button>
                    <Button color="inherit" onClick={logout}>
                        Salir
                    </Button>
                </Toolbar>
            </AppBar>

            <Box sx={{ p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
}
