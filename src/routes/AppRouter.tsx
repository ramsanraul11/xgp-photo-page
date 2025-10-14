import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "../features/contact/pages/ContactPage";
import HomePage from "../features/home/pages/HomePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
