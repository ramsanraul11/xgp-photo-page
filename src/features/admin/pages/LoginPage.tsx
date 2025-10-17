// src/features/admin/pages/LoginPage.tsx
import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApiAsync } from "../../../auth/services/auth.service";
import { useAuth } from "../../../auth/useAuth";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const token = await loginApiAsync({
      email: form.email,
      password: form.password,
      clientId: "xgp-web",
      clientSecret: "Y0urCl13ntS3cret!2025",
    });

    if (!token) {
      setIsLoading(false);
      alert("Credenciales incorrectas");
      return;
    }

    login(token);
    navigate("/admin/projects");
    setIsLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ mt: 10, p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Administración
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Usuario"
            name="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePassword}
                    edge="end"
                    aria-label="mostrar contraseña"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Entrar"
            )}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
