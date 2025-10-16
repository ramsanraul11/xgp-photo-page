// src/features/admin/pages/ProjectFormPage.tsx
import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectFormPage() {
    const { projectId } = useParams();
    const isNew = !projectId;

    const [form, setForm] = useState({ title: "", description: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Guardar", form);
        // TODO: llamada API save/update
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    {isNew ? "Nuevo Proyecto" : `Editar Proyecto ${projectId}`}
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
