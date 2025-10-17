import { axiosClient } from "../../../api/axiosClient";
import { axiosPublic } from "../../../api/axiosPublic";
import {
  ProjectCreateDto,
  ProjectDto,
  ProjectUpdateDto,
} from "../../../shared/types/project.types";

export const getProjects = async (): Promise<ProjectDto[]> => {
  const response = await axiosPublic.get<ProjectDto[]>("/Projects");
  return response.data;
};

export const getProjectById = async (id: string): Promise<ProjectDto | null> => {
  const response = await axiosPublic.get<ProjectDto>(`/Projects/${id}`);
  return response.data ?? null;
};

//Need token
export async function createProject(
  dto: ProjectCreateDto
): Promise<ProjectDto> {
  const response = await axiosClient.post<ProjectDto>("/Projects", dto);

  return response.data;
}

//Need token
export async function updateProject(
  dto: ProjectUpdateDto
): Promise<ProjectDto> {
  const response = await axiosClient.put<ProjectDto>(
    `/Projects/${dto.id}`,
    dto
  );

  return response.data;
}
