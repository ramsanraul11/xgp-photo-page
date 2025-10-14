import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Proyecto {projectId}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, opacity: 0.8 }}>
        Aquí puedes renderizar los detalles del proyecto con ID {projectId}.
      </Typography>
    </Box>
  );
}
