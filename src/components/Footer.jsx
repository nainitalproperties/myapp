import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 3, textAlign: "center", mt: "auto" }}>
      <Typography variant="body2" color="textSecondary">
        © 2025 NainitalProperties.com • A unit of Silyify Realtors OPC Pvt. Ltd.
      </Typography>
    </Box>
  );
}

export default Footer;
