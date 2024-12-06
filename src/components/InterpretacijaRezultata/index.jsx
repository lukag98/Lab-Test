import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import bloodimage from "../../images/krv.png";
import urinimage from "../../images/urin.png";
import biochemistryimage from "../../images/biohemija.png";
const cardData = [
  {
    id: 1,
    title: "Kompletna krvna slika",
    path: "/kompletnakrvnaslika",
    image: bloodimage,
    overlayColor: "rgba(204, 2, 2, 0.7)",
  },
  {
    id: 2,
    title: "Biohemija",
    image: biochemistryimage,
    path: "/biohemija",
    overlayColor: "rgba(42, 121, 145, 0.7)",
  },
  {
    id: 3,
    title: "Analize urina",
    image: urinimage,
    path: "/hemijskipregledurina",
    overlayColor: "rgba(255, 183, 3, 0.8)", // Žuta
  },
];

const InterpretationPage = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        gutterBottom
        sx={{
          fontSize: "40px",
          color: "#666",
          textAlign: "center",
          mb: "80px",
        }}
      >
        Interpretacija rezultata laboratorijskih testova online
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              sx={{
                marginTop: "30px",
                height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: card.overlayColor,
                  zIndex: 1,
                },
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.2s",
                },
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  zIndex: 2,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px", // Razmak između naslova i dugmeta
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  {card.title}
                </Typography>
                <Button
                  variant="outlined"
                  component={Link}
                  to={card.path}
                  sx={{
                    fontSize: "20px",
                    border: "2.3px solid white",
                    borderRadius: "30px",
                    color: "white",
                    textTransform: "none",
                    padding: "10px 20px",
                    "&:hover": {
                      backgroundColor: "rgba(31,124,6,0.1)",
                    },
                  }}
                >
                  Unesi odmah
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InterpretationPage;
