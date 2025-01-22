import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import dayjs from "dayjs";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material";
const violetBase = "#1f7c06";
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

const Biohemija = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Muski");

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      naziv: "Glukoza",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "mmol/L",
    },
    {
      id: 2,
      naziv: "Urea",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "mmol/L",
    },
    {
      id: 3,
      naziv: "Kreatinin",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "umol/L",
    },
    {
      id: 4,
      naziv: "Mokracna kiselina",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "umol/L",
    },
    {
      id: 5,
      naziv: "Bilirubin T",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "umol/L",
    },
    {
      id: 6,
      naziv: "AST",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "U/L",
    },
    {
      id: 7,
      naziv: "ALT",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "U/L",
    },
    {
      id: 8,
      naziv: "Proteini ukupni",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "g/L",
    },
    {
      id: 9,
      naziv: "Holesterol",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "mmol/L",
    },
    {
      id: 10,
      naziv: "Trigliceridi",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "mmol/L",
    },
    {
      id: 11,
      naziv: "HDL-holesterol",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "mmol/L",
    },
    {
      id: 12,
      naziv: "LDL-holesterol",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "mmol/L",
    },
  ]);

  const handleInputChange = (id, newValue) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, vrednost: newValue } : row
    );
    setRows(updatedRows);
  };

  const handleAgeChange = (newAge) => {
    setAge(newAge);
    const updatedRows = calculateReferente(newAge, gender);
    setRows(updatedRows);
  };
  const handleGenderChange = (newGender) => {
    setGender(newGender);
    const updatedRows = calculateReferente(age, newGender);
    setRows(updatedRows);
  };

  const calculateReferente = (age, gender) => {
    return rows.map((row) => {
      const updatedRows = { ...row };
      switch (updatedRows.naziv) {
        case "Glukoza":
          updatedRows.referentneVrednosti =
            age < 18 ? "3.3 - 5.6" : "3.9 - 5.9";
          break;
        case "Urea":
          updatedRows.referentneVrednosti = "2.8 - 8.1";
          break;
        case "Kreatinin":
          if (age > 1 && age <= 2) {
            // Deca 1-2 godine
            updatedRows.referentneVrednosti = "21 - 36";
          } else if (age > 2 && age <= 4) {
            // Deca 3-4 godine
            updatedRows.referentneVrednosti = "27 - 42";
          } else if (age > 4 && age <= 6) {
            // Deca 5-6 godina
            updatedRows.referentneVrednosti = "28 - 52";
          } else if (age > 6 && age <= 8) {
            // Deca 7-8 godina
            updatedRows.referentneVrednosti = "35 - 53";
          } else if (age > 8 && age <= 10) {
            // Deca 9-10 godina
            updatedRows.referentneVrednosti = "34 - 65";
          } else if (age > 10 && age <= 12) {
            // Deca 11-12 godina
            updatedRows.referentneVrednosti = "46 - 70";
          } else if (age > 12 && age <= 14) {
            // Deca 13-14 godina
            updatedRows.referentneVrednosti = "50 - 77";
          } else if (gender === "Muski") {
            // Muškarci
            updatedRows.referentneVrednosti = "62 - 106";
          } else if (gender === "Zenski") {
            // Žene
            updatedRows.referentneVrednosti = "44 - 80";
          }
          break;
        case "Mokracna kiselina":
          updatedRows.referentneVrednosti =
            gender === "Muski" ? "202.3 - 416.5" : "142.8 - 339.2";
          break;
        case "Bilirubin T":
          updatedRows.referentneVrednosti = "2 - 21";
          break;
        case "AST":
          updatedRows.referentneVrednosti =
            gender === "Muski" ? "7 - 38" : "7 - 32";
          break;
        case "ALT":
          updatedRows.referentneVrednosti =
            gender === "Muski" ? "8 - 41" : "8 - 33";
          break;
        case "Proteini ukupni":
          updatedRows.referentneVrednosti = "64 - 83";
          break;
        case "Holesterol":
          updatedRows.referentneVrednosti = "3.9 - 6.2";
          break;
        case "Trigliceridi":
          updatedRows.referentneVrednosti = "0 - 1.7";
          break;
        case "HDL-holesterol":
          updatedRows.referentneVrednosti = "1.55 - 5";
          break;
        case "LDL-holesterol":
          updatedRows.referentneVrednosti = "3.4 - 4.1";
          break;

        default:
          updatedRows.referentneVrednosti = "";
          break;
      }

      return updatedRows;
    });
  };

  const [highlightedRows, setHighlightedRows] = useState([]);

  const handleObradi = () => {
    const updatedHighlightedRows = []; // Obrati pažnju na naziv (koristi ispravan)

    rows.forEach((row, index) => {
      if (row.vrednost !== "") {
        const referentiOpseg = row.referentneVrednosti.split(" - ");
        const min = parseFloat(referentiOpseg[0]);
        const max = parseFloat(referentiOpseg[1]);
        const value = parseFloat(row.vrednost);

        if (value < min) {
          console.log(`Naziv: ${row.naziv} je nizak`);
          updatedHighlightedRows.push(row.id); // Dodaj trenutni indeks
        } else if (value > max) {
          console.log(`Naziv: ${row.naziv} je visok`);
          updatedHighlightedRows.push(row.id); // Dodaj trenutni indeks
        } else {
          console.log(`Naziv: ${row.naziv} je ODLICAN!`);
        }
      }
    });

    setHighlightedRows(updatedHighlightedRows); // Postavi ažurirani niz
  };

  return (
    <>
      <Box
        sx={{
          width: "80%",
          maxWidth: "800px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Biohemija
          <VaccinesOutlinedIcon sx={{ color: "rgba(255, 46, 206)" }} />
        </Typography>

       

        <Typography
          variant="h6"
          sx={{
            marginBottom: "26px",
            display: "flex",
            gap: "10px", // Razmak između ikone i teksta
            padding: "16px", // Unutrašnji razmak
            backgroundColor: "#f5f5f5", // Svetlosiva pozadina za bolji izgled
            borderRadius: "8px", // Zaobljeni uglovi
            textAlign: "left",
          }}
        >
          <ErrorOutlineOutlinedIcon sx={{ color: "red", fontSize: "30px" }} />
          Laboratorijske vrednosti mogu biti oznacene sivim okvirom za
          abnormalnu vrednost
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Tekst polje za godine */}
          <TextField
            label="Godine"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={age}
            onChange={(e) => handleAgeChange(parseInt(e.target.value))}
            sx={{ flex: 1 }}
          />
          {/* Select za pol */}
          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="gender-label">Pol</InputLabel>
            <Select
              labelId="gender-label"
              value={gender}
              onChange={(e) => handleGenderChange(e.target.value)}
              label="Pol"
            >
              <MenuItem value="Muski">Muški</MenuItem>
              <MenuItem value="Zenski">Ženski</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Datum verifikacije rezultata"
              value={selectedDate}
              onChange={(newDate) => handleDateChange(newDate)}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "100%" }} />
              )}
            />
          </LocalizationProvider>
        </Box>
      </Box>
      <Box>
        <TableContainer
          component={Paper}
          sx={{
            width: "80%",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Biohemija</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Vrednost
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Referentne vrednosti
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Jedinica mere mm/h
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "rgb(31,124,6)" }}
                  >
                    {row?.naziv}
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      sx={{
                        width: "100px",
                        backgroundColor: highlightedRows.includes(row.id)
                          ? "rgb(230, 230, 230)"
                          : "transparent",
                      }}
                      type="number"
                      InputProps={{ inputProps: { min: 0 } }}
                      size="small"
                      value={row.vrednost}
                      onChange={(e) =>
                        handleInputChange(row.id, e.target.value)
                      }
                    ></TextField>
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "17px" }}>
                    {row.referentneVrednosti}
                  </TableCell>
                  <TableCell align="right">{row.jedinicaMere}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <ThemeProvider theme={theme}>
                  <TableCell align="left" colSpan={2}>
                    <Button
                      color="violet"
                      variant="contained"
                      sx={{
                        border: 0,
                        width: "350px",
                        height: "50px",
                        borderRadius: 0,
                        fontWeight: "bold",
                      }}
                      onClick={handleObradi}
                    >
                      Obradi
                    </Button>
                  </TableCell>
                </ThemeProvider>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Biohemija;
