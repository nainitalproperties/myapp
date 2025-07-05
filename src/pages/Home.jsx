import { Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Find Your Dream Property in Nainital
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Buy, Rent or Sell homes with ease
      </Typography>
      <Link to="/listings">
        <Button variant="contained" size="large" sx={{ mt: 4 }}>
          Browse Listings
        </Button>
      </Link>
    </Container>
  );
}
