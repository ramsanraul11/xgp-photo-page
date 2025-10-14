import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar"; // ajusta la ruta según tu estructura

export default function MainLayout() {
    return (
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}>
            {/* 🔹 Header persistente */}
            <Navbar />

            {/* 🔹 Aquí se renderizan las páginas */}
            <Box component="main">
                <Outlet />
            </Box>
        </Box>
    );
}
