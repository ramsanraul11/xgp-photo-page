import axios from "axios";
import { ProjectDto } from "../../../shared/types/project.types";

const BASE_URL = "https://xgp-photo-api.onrender.com/api";

export const getProjects = async () => {
  const response = await axios.get<ProjectDto[]>(`${BASE_URL}/Projects`);
  return response.data;
};

export const getProjectById = async (id: string): Promise<ProjectDto | null> => {
  const response = await axios.get<ProjectDto>(`${BASE_URL}/Projects/${id}`);
  return response.data ?? null;
};
