import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    name: "Adrenalina pura",
    description: "Motocross saltando sobre la pista.",
    image: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=1200",
  },
  {
    name: "Control y polvo",
    description: "Piloto derrapando con precisión extrema.",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1200",
  },
  {
    name: "Competencia extrema",
    description: "Motocross en el desierto al atardecer.",
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=1200",
  },
];

export default function ImageCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      effect="fade"
      speed={800}
      loop
      style={{
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.name}>
          <Box
            sx={{
              position: "relative",
              height: 450,
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              p: 4,
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))",
                zIndex: 0,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                color="primary.main"
                sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#E0E0E0",
                  fontSize: "1.1rem",
                  maxWidth: "70%",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
