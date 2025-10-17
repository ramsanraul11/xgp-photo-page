import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProjectById,
  createProject,
  updateProject,
} from "../../../features/home/repositories/project.repository";
import type { ProjectCreateDto, ProjectUpdateDto } from "../../../shared/types/project.types";

export default function ProjectFormPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const isNew = !projectId;

  const [form, setForm] = useState<ProjectCreateDto>({
    title: "",
    description: "",
    imageUrl: "",
    bannerClickTitle: "",
    bannerClickDescription: "",
    isActive: true,
    details: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Cargar datos del proyecto si estamos editando
  useEffect(() => {
    if (!isNew && projectId) {
      (async () => {
        setIsLoading(true);
        try {
          const data = await getProjectById(projectId);
          if (data) {
            setForm({
              title: data.title,
              description: data.description ?? "",
              imageUrl: data.imageUrl,
            //   bannerClickTitle: data.bannerClickTitle ?? "",
            //   bannerClickDescription: data.bannerClickDescription ?? "",
              isActive: data.isActive,
              details: data.details.map((d) => ({
                imageUrl: d.imageUrl,
                isActive: d.isActive,
              })),
            });
          } else {
            setError("Proyecto no encontrado");
          }
        } catch (err) {
          setError("Error al cargar el proyecto");
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [isNew, projectId]);

  // 🔹 Manejo de cambios
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (isNew) {
        await createProject(form);
      } else {
        const updateDto: ProjectUpdateDto = { ...form, id: projectId! };
        await updateProject(updateDto);
      }
      navigate("/admin/projects");
    } catch (err) {
      console.error(err);
      setError("Error al guardar el proyecto");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );

  if (error)
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          {isNew ? "Nuevo Proyecto" : "Editar Proyecto"}
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Título"
            name="title"
            value={form.title}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Descripción"
            name="description"
            value={form.description}
            onChange={handleChange}
            margin="normal"
            multiline
            minRows={4}
          />
          <TextField
            fullWidth
            label="URL Imagen Principal"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Guardar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
