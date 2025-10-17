// src/features/admin/pages/ProjectListPage.tsx
import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useProjects } from "../../../shared/hooks/useProjects"; // ajustá la ruta según tu estructura

export default function ProjectListPage() {
    const { projects, isLoading, error } = useProjects();

    return (
        <Container sx={{ mt: 4 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Typography variant="h5">Gestión de Proyectos</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/admin/projects/new"
                >
                    Nuevo Proyecto
                </Button>
            </Stack>

            {/* 🔄 Estado de carga */}
            {isLoading && (
                <Stack alignItems="center" mt={4}>
                    <CircularProgress />
                </Stack>
            )}

            {/* ⚠️ Error */}
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            {/* ✅ Tabla de proyectos */}
            {!isLoading && !error && (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell>{p.title}</TableCell>
                                <TableCell align="right">
                                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            component={RouterLink}
                                            to={`/admin/projects/${p.id}/edit`}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="secondary"
                                            component={RouterLink}
                                            to={`/admin/projects/${p.id}/photos`}
                                        >
                                            Fotos
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </Container>
    );
}
