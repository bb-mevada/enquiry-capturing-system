import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EnquiryForm from "./EnquiryForm.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EnquiryForm />
  </StrictMode>
);
