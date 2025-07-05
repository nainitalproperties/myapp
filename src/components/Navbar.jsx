import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" component="div">
          Nainital<span style={{ color: "#16a34a" }}>Properties</span>.com
        </Typography>

        <Box>
          <Button color="inherit" href="/buy">Buy</Button>
          <Button color="inherit" href="/sell">Sell</Button>
          <Button color="inherit" href="/rent">Rent</Button>
          <Button color="inherit" href="/list-property">List Property</Button>
          <Button color="inherit" href="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
