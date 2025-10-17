import { useCallback, useEffect, useState } from "react";
import {
  getProjectById
} from "../../features/home/repositories/project.repository";
import type { ProjectDto } from "../types/project.types";

export const useProjectDetail = (projectId?: string) => {
  const [project, setProject] = useState<ProjectDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProject = useCallback(async () => {
    if (!projectId) return;

    try {
      setIsLoading(true);
      const projectDetail = await getProjectById(projectId);

      if (!projectDetail) {
        setError("Proyecto no encontrado");
      } else {
        setProject(projectDetail);
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
