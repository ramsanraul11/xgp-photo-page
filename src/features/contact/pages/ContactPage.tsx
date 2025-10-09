import { Container, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      <ContactForm />
    </Container>
  );
}
