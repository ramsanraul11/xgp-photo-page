import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    name: "Adrenalina pura",
    image: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=1920",
    projectId: 1
  },
  {
    name: "Control y polvo",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1920",
    projectId: 2
  },
  {
    name: "Competencia extrema",
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=1920",
    projectId: 3
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
      style={{ width: "100%", height: "100%" }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.name}>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
              },
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
