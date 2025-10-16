// src/features/admin/pages/ProjectListPage.tsx
import {
    Button,
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

export default function ProjectListPage() {
    const projects = [
        { id: "1", title: "Proyecto A" },
        { id: "2", title: "Proyecto B" },
    ];

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
        </Container>
    );
}
