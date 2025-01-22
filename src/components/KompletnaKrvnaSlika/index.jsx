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
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import dayjs from "dayjs";
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
const KompletnaKrvnaSlika = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Muski");

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      naziv: "WBC",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "10^9/L",
    },
    {
      id: 2,
      naziv: "LYM#",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "10^9/L",
    },
    {
      id: 3,
      naziv: "GRA#",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "10^9/L",
    },
    {
      id: 4,
      naziv: "LYM%",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "%",
    },
    {
      id: 5,
      naziv: "GRA%",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "%",
    },
    {
      id: 6,
      naziv: "RBC",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "10^12/L",
    },
    {
      id: 7,
      naziv: "HGB",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "g/L",
    },
    {
      id: 8,
      naziv: "HCT",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "%",
    },
    {
      id: 9,
      naziv: "MCV",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "fl",
    },
    {
      id: 10,
      naziv: "MCH",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "pg",
    },
    {
      id: 11,
      naziv: "MCHC",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "g/L",
    },
    {
      id: 12,
      naziv: "RDW-CV",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "%",
    },
    {
      id: 13,
      naziv: "PLT",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "10^9/L",
    },
    {
      id: 14,
      naziv: "MPV",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "fl",
    },
    {
      id: 15,
      naziv: "PDW",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "",
    },
    {
      id: 16,
      naziv: "PCT",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "mL/L",
    },
    {
      id: 17,
      naziv: "Mentzer index",
      vrednost: "",
      referentneVrednosti: "",
      jedinicaMere: "",
    },
  ]);

  const InputChange = (id, newValue) => {
    const numericValue = parseFloat(newValue) || "";
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, vrednost: numericValue } : row
    );
    setRows(updatedRows);
  };
  const handleAgeChange = (newAge) => {
    setAge(newAge);
    const updatedRows = calculateReferente(newAge, gender);
    setRows(updatedRows);
  };

  const handleGenderChange = (newGander) => {
    setGender(newGander);
    const updatedRows = calculateReferente(age, newGander);
    setRows(updatedRows);
  };
  const calculateReferente = (age, gender) => {
    return rows.map((row) => {
      const updatedRow = { ...row };
      switch (updatedRow.naziv) {
        case "WBC":
          updatedRow.referentneVrednosti =
            age < 18 ? "5.0 - 15.5" : "4.0 - 11.0";
          break;
        case "LYM#":
          updatedRow.referentneVrednosti = age < 18 ? "2.0 - 8.0" : "1.0 - 3.0";
          break;
        case "GRA#":
          updatedRow.referentneVrednosti = age < 18 ? "1.5 - 6.5" : "2.0 - 7.0";
          break;
        case "LYM%":
          updatedRow.referentneVrednosti = age < 18 ? "40 - 70" : "20 - 40";
          break;
        case "GRA%":
          updatedRow.referentneVrednosti = age < 18 ? "30 - 60" : "50 - 70";
          break;
        case "RBC":
          updatedRow.referentneVrednosti =
            gender === "Muski"
              ? age < 18
                ? "4.1 - 5.5"
                : "4.5 - 5.9"
              : age < 18
              ? "4.1 - 5.1"
              : "4.1 - 5.1";
          break;
        case "HGB":
          updatedRow.referentneVrednosti =
            gender === "Muski"
              ? age < 18
                ? "120 - 160"
                : "140 - 180"
              : age < 18
              ? "120 - 150"
              : "120 - 160";
          break;
        case "HCT":
          updatedRow.referentneVrednosti =
            gender === "Muski"
              ? age < 18
                ? "36 - 49"
                : "40 - 50"
              : age < 18
              ? "36 - 46"
              : "36 - 46";
          break;
        case "MCV":
          updatedRow.referentneVrednosti = "80 - 100";
          break;
        case "MCH":
          updatedRow.referentneVrednosti = "27 - 33";
          break;
        case "MCHC":
          updatedRow.referentneVrednosti = "320 - 360";
          break;
        case "RDW-CV":
          updatedRow.referentneVrednosti = "11.5 - 14.5";
          break;
        case "PLT":
          updatedRow.referentneVrednosti = "150 - 400";
          break;
        case "MPV":
          updatedRow.referentneVrednosti = "7.5 - 11.5";
          break;
        case "PDW":
          updatedRow.referentneVrednosti = "9 - 17";
          break;
        case "PCT":
          updatedRow.referentneVrednosti = "0.1 - 0.3";
          break;
        case "Mentzer index":
          updatedRow.referentneVrednosti = "0 - 13";
          break;
        default:
          updatedRow.referentneVrednosti = "";
      }
      return updatedRow;
    });
  };

  const [highlightedRows, setHighlightedRows] = useState([]);
  const handleObradi = () => {
    const updatedHighLightedRows = [];
    rows.forEach((row) => {
      if (row.vrednost !== "") {
        const referentiOpseg = row.referentneVrednosti.split(" - ");
        const min = parseFloat(referentiOpseg[0]);
        const max = parseFloat(referentiOpseg[1]);
        const value = parseFloat(row.vrednost);
        if (value < min) {
          console.log(`Naziv: ${row.naziv} je nizak`);
          updatedHighLightedRows.push(row.id);
        } else if (value > max) {
          console.log(`Naziv: ${row.naziv} je visok`);
          updatedHighLightedRows.push(row.id);
        } else {
          console.log(`Naziv: ${row.naziv} je ODLICAN!`);
        }
      }
      return false;
    });
    setHighlightedRows(updatedHighLightedRows);
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
            display: "flex", // Postavlja tekst i ikonu u isti red
            justifyContent: "space-between", // Poravnava sadržaj
            alignItems: "center", // Vertikalno centriranje
          }}
        >
          Kompletna krvna slika
          <VaccinesOutlinedIcon sx={{ color: "rgba(255, 46, 206)" }} />
        </Typography>
        {/* <Typography
          variant="h6"
          sx={{
            marginBottom: "16px",
            textAlign: "left",
            display: "flex",
            gap: "10px", // Razmak između ikone i teksta
            padding: "16px", // Unutrašnji razmak
            backgroundColor: "#f5f5f5", // Svetlosiva pozadina za bolji izgled
            borderRadius: "8px", // Zaobljeni uglovi
          }}
        >
          <InfoOutlinedIcon sx={{ color: "blue", fontSize: "30px" }} />
          Registrujte se da bi ste mogli da sacuvate svoje laboratorijske
          testove
        </Typography> */}

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
                <TableCell sx={{ fontWeight: "bold" }}>
                  Kompletna krvna slika
                </TableCell>
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
                    {row.naziv}
                  </TableCell>
                  <TableCell align="right">
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
                      value={row.vrednost || ""}
                      onChange={(e) => InputChange(row.id, e.target.value)}
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
export default KompletnaKrvnaSlika;
