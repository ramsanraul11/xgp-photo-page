import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingOverlay from "../../../shared/components/LoadingOverlay";
import { useProjects } from "../../../shared/hooks/useProjects";

export default function ImageCarousel() {

  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      // <Box
      //   sx={{
      //     width: "100%",
      //     height: "100vh",
      //     display: "flex",
      //     alignItems: "center",
      //     justifyContent: "center",
      //     bgcolor: "black",
      //   }}
      // >
      // <CircularProgress size={60} sx={{ color: "white" }} />
      <LoadingOverlay visible={true} />
      // </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "black",
          color: "white",
          fontSize: "1.2rem",
        }}
      >
        {error}
      </Box>
    );
  }

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      effect="fade"
      speed={1000}
      loop
      style={{ width: "100%", height: "100vh" }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <Box
            component={RouterLink}
            to={`/projects/${project.id}`}
            sx={{
              position: "relative",
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
                zIndex: 1,
              },
              "&:hover::after": {
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
              },
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                position: "relative",
                zIndex: 2,
                color: "white",
                fontWeight: "bold",
                textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              {project.title}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
