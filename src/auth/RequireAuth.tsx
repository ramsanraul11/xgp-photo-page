// src/auth/RequireAuth.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function RequireAuth() {
    const { token, isAuthenticated } = useAuth();
    const location = useLocation();

    // Si no hay token en memoria o en localStorage → redirige
    if (!token || !isAuthenticated()) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    // Si hay token válido → renderiza la ruta interna
    return <Outlet />;
}
