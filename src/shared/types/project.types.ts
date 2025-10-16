export interface ProjectDetailDto {
  id: string;         // Guid => string
  imageUrl: string;
  isActive: boolean;
}

export interface ProjectDto {
  id: string;         // Guid => string
  title: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  createDate: string; // DateTime => ISO string
  details: ProjectDetailDto[];
}
