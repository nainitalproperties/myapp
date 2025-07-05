import React from "react";
import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Page Content */}
      <Container sx={{ flex: 1, py: 4 }}>
        <h1>Welcome to Nainital Properties</h1>
        <p>Start exploring properties to Buy, Sell or Rent.</p>
      </Container>

      {/* ✅ Footer */}
      <Footer />
    </Box>
  );
}

export default App;
