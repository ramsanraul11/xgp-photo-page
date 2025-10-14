import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "../features/contact/pages/ContactPage";
import HomePage from "../features/home/pages/HomePage";
import ProjectDetailPage from "../features/project/pages/ProjectDetailPage";
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
      </Routes>
    </BrowserRouter>
  );
}
