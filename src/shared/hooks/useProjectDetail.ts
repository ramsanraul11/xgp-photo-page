import { useCallback, useEffect, useState } from "react";
import { getProjects } from "../../features/home/repositories/project.repository";
import type { ProjectDto } from "../types/project.types";

export const useProjectDetail = (projectId?: string) => {
  const [project, setProject] = useState<ProjectDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProject = useCallback(async () => {
    if (!projectId) return;

    try {
      setIsLoading(true);
      const data = await getProjects();

      // 👇 Filtrar el proyecto en cliente
      const found = data.find((p) => p.id === projectId);

      if (!found) {
        setError("Proyecto no encontrado");
      } else {
        setProject(found);
      }
    } catch (err) {
      console.error("❌ Error al cargar el proyecto:", err);
      setError("Error al cargar el proyecto");
    } finally {
      setIsLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  return { project, isLoading, error, refetch: fetchProject };
};
