import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import LoginPage from "../features/admin/pages/LoginPage";
import ProjectFormPage from "../features/admin/pages/ProjectFormPage";
import ProjectListPage from "../features/admin/pages/ProjectListPage";
import ProjectPhotosPage from "../features/admin/pages/ProjectPhotosPage";
import ContactPage from "../features/contact/pages/ContactPage";
import HomePage from "../features/home/pages/HomePage";
import ProjectDetailPage from "../features/project/pages/ProjectDetailPage";
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔹 Agrupamos las rutas dentro del layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          {/* {
            Tareas para primera version guarra
              - Buscar dominio
                - Xavi: buscar un nombre de dominio disponible
                - Raul: Activar en Vercel
              - XAVI: Definir proyectos
                - Cuantos proyectos
                - En cada proyecto necesito:
                  - Imagen portada
                  - Texto de proyecto (Titulo (El que se ve en el inicio))
                  - Texto que se ve al haber clicado
                  - Fotos asociadas a este proyecto
              - RAUL: Nueva pagina About me
          } */}

        </Route>

        {/* TODO: Gestion de fotos autonoma Xavi
            - 1. Ruta de Login
            - 2. Ruta de Gestion Proyectos
                - Listado de Proyectos
                    - Editar
                      - Gestionar texto del Proyecto
                      - Gestionar que fotos tiene ese proyecto
                      - Gestionar foto del proyecto
                    - Eliminar: Borra fotos asociadas, texto y foto proyecto
                    - Añadir
                      - Añadir texto del Proyecto */}
        {/* Login */}
        <Route path="/admin/login" element={<LoginPage />} />

        {/* Rutas protegidas */}
        <Route element={<RequireAuth />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="projects" element={<ProjectListPage />} />
            <Route path="projects/new" element={<ProjectFormPage />} />
            <Route path="projects/:projectId/edit" element={<ProjectFormPage />} />
            <Route path="projects/:projectId/photos" element={<ProjectPhotosPage />} />
            
            <Route path="*" element={<Navigate to="/admin/projects" replace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
