// src/features/admin/pages/ProjectPhotosPage.tsx
import {
    Box,
    Button,
    Card,
    CardActions,
    CardMedia,
    Container,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

export default function ProjectPhotosPage() {
    const { projectId } = useParams();

    // TODO: conectar con backend (GET/POST/DELETE de fotos)
    const photos = [
        { id: "1", url: "https://picsum.photos/300/200" },
        { id: "2", url: "https://picsum.photos/300/200?random=2" },
        { id: "3", url: "https://picsum.photos/300/200?random=3" },
    ];

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        console.log("Subir archivos:", files);
    };

    const handleDelete = (id: string) => {
        console.log("Eliminar foto:", id);
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Fotos del Proyecto {projectId}
            </Typography>

            <Box sx={{ my: 2 }}>
                <Button variant="contained" component="label">
                    Subir Fotos
                    <input hidden multiple type="file" onChange={handleUpload} />
                </Button>
            </Box>

            {/* 🔹 CSS Grid en lugar de MUI Grid */}
            <Box
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
                    margin: "0 auto",
                }}
            >
                {photos.map((p) => (
                    <Card key={p.id} sx={{ boxShadow: 3 }}>
                        <CardMedia
                            component="img"
                            image={p.url}
                            alt={`Foto ${p.id}`}
                            sx={{ height: 200, objectFit: "cover" }}
                        />
                        <CardActions>
                            <Button
                                color="error"
                                variant="outlined"
                                fullWidth
                                onClick={() => handleDelete(p.id)}
                            >
                                Eliminar
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>
    );
}
