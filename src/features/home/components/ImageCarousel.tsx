import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    name: "Proyecto 1 clica",
    image: "/images/migrar-a-storage/_DSF0626.jpg",
    projectId: 1,
  },
  {
    name: "Proyecto 2 clica",
    image: "/images/migrar-a-storage/_DSF2392.jpg",
    projectId: 2,
  },
  {
    name: "Proyecto 3 clica",
    image: "/images/migrar-a-storage/_DSF2923.jpg",
    projectId: 3,
  },
  {
    name: "Proyecto 4 clica",
    image: "/images/migrar-a-storage/_DSF8745.jpg",
    projectId: 4,
  },
];

export default function ImageCarousel() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      effect="fade"
      speed={1000}
      loop
      style={{ width: "100%", height: "100vh" }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.name}>
          <Box
            component={RouterLink}
            to={`/projects/${item.projectId}`}
            sx={{
              position: "relative",
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none", // elimina subrayado del link
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
              {item.name}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
