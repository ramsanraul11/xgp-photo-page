export interface ProjectDetailDto {
  id: string; // Guid => string
  imageUrl: string;
  isActive: boolean;
}

export interface ProjectDto {
  id: string; // Guid => string
  title: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  createDate: string; // DateTime => ISO string
  details: ProjectDetailDto[];
}

// 🔹 DTO para crear detalles de proyecto
export interface ProjectDetailCreateDto {
  imageUrl: string;
  isActive: boolean;
}

// 🔹 DTO base para crear un proyecto
export interface ProjectCreateDto {
  title: string;
  description?: string;
  imageUrl: string;
  bannerClickTitle?: string;
  bannerClickDescription?: string;
  isActive: boolean;
  details: ProjectDetailCreateDto[];
}

// 🔹 DTO para actualizar un proyecto
export interface ProjectUpdateDto extends ProjectCreateDto {
  id: string; // GUID del proyecto
}
