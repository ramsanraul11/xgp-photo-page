import axios from "axios";
import { ProjectDto } from "../../../shared/types/project.types";

const BASE_URL = "https://xgp-photo-api.onrender.com/api";

export const getProjects = async () => {
  const response = await axios.get<ProjectDto[]>(`${BASE_URL}/Projects`);
  console.log({ response });
  return response.data;
};
