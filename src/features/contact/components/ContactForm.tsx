import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando formulario:", form);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
    >
      <TextField label="Nombre" name="name" value={form.name} onChange={handleChange} required />
      <TextField label="Email" name="email" value={form.email} onChange={handleChange} required />
      <TextField
        label="Mensaje"
        name="message"
        value={form.message}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained">Enviar</Button>
    </Box>
  );
}