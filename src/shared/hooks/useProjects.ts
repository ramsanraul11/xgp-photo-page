import { useCallback, useEffect, useState } from "react";
import { getProjects } from "../../features/home/repositories/project.repository";
import type { ProjectDto } from "../types/project.types";

interface UseProjectsResult {
  projects: ProjectDto[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<ProjectDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await getProjects();

      setProjects(data);
    } catch (err) {
      console.error("❌ Error al cargar proyectos", err);
      setError("Error al cargar proyectos");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { projects, isLoading, error, refetch: fetchProjects };
}
