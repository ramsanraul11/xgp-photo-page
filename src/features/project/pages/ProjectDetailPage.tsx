import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { PROJECT_DETAIL_MOCK } from "../../../data/mocks/projectdetail.mock";
import LoadingOverlay from "../../../shared/components/LoadingOverlay";
import { useImagePreloader } from "../../../shared/hooks/useImagePreloader";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECT_DETAIL_MOCK.find((p) => p.id === Number(projectId));

  // ✅ Obtener todas las URLs (principal + fotos)
  const allImages = project
    ? [project.url, ...project.photos.map((p) => p.url)]
    : [];

  // ✅ Hook de pre-carga
  const imagesLoaded = useImagePreloader(allImages);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = useCallback((index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  const handleNext = useCallback(() => {
    if (!project) return;
    setCurrentIndex((prev) => (prev + 1) % project.photos.length);
  }, [project]);

  const handlePrev = useCallback(() => {
    if (!project) return;
    setCurrentIndex((prev) =>
      prev === 0 ? project.photos.length - 1 : prev - 1
    );
  }, [project]);

  if (!project) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212",
          color: "white",
        }}
      >
        <Typography variant="h4">Proyecto no encontrado</Typography>
      </Box>
    );
  }

  // ✅ Mostrar loader si aún no están cargadas las imágenes
  if (!imagesLoaded) {
    return <LoadingOverlay visible={true} />;
  }

  // ✅ Renderizar la página normalmente cuando ya están cargadas
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 6,
        pt: { xs: 10, sm: 12 },
      }}
    >
      {/* Imagen principal */}
      <Box
        component="img"
        src={project.url}
        alt={project.title}
        sx={{
          width: "80%",
          maxHeight: 400,
          borderRadius: 2,
          objectFit: "cover",
          mb: 4,
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      />

      {/* Título */}
      <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
        {project.title}
      </Typography>

      {/* Descripción */}
      <Typography
        variant="h6"
        sx={{
          mt: 1,
          mb: 4,
          opacity: 0.8,
          maxWidth: "70%",
          textAlign: "center",
        }}
      >
        {project.description}
      </Typography>

      {/* Galería */}
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
          justifyContent: "center",
          maxWidth: "80%",
        }}
      >
        {project.photos.map((photo, index) => (
          <Box
            key={photo.id}
            onClick={() => handleOpen(index)}
            sx={{
              position: "relative",
              width: "100%",
              height: 200,
              borderRadius: 2,
              overflow: "hidden",
              cursor: "pointer",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0)",
                transition: "background-color 0.3s ease",
              },
              "&:hover img": {
                transform: "scale(1.05)",
              },
              "&:hover::after": {
                backgroundColor: "rgba(0,0,0,0.35)",
              },
            }}
          >
            <Box component="img" src={photo.url} alt={`Foto ${photo.id}`} />
          </Box>
        ))}
      </Grid>

      {/* Modal de visualización */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 16,
              color: "white",
            }}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>

          <Box
            component="img"
            src={project.photos[currentIndex].url}
            alt={`Foto ampliada ${project.photos[currentIndex].id}`}
            sx={{
              maxWidth: "90%",
              maxHeight: "80vh",
              borderRadius: 2,
              boxShadow: "0 0 30px rgba(0,0,0,0.6)",
              objectFit: "contain",
              opacity: imagesLoaded ? 1 : 0,
              transition: "opacity 0.6s ease-out",
              transform: imagesLoaded ? "translateY(0)" : "translateY(10px)",
              transitionProperty: "opacity, transform",
            }}
          />

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              color: "white",
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}
