import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = [
  {
    id: 1,
    name: "Interpretacija rezultata laboratorijskih testova",
    path: "/",
  },
  { id: 2, name: "Opis rezultata laboratorijskih testova", path: "#" },
  { id: 3, name: "Medicinski kalkulator", path: "#" },
];

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        height: "100px", // Navigacija je sada visoka 100px
        mb: "80px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: "100px", // Visina Toolbara takođe je 100px
            display: "flex",
            alignItems: "center",
          }}
        >
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#333",
              fontSize: "30px",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: ".3rem",
              color: "#333",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: "rgb(31,124,6)",
                  fontSize: "20px",
                  fontWeight: 500,
                  borderLeft: 1,
                  borderRadius: 0,
                  borderColor: "rgb(31,124,6)",
                  textTransform: "none",
                  "&:hover": {
                    color: "rgb(51, 217, 7)",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
