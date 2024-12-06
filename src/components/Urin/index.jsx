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
const Urin = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Muski");

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      naziv: "Izgled",
      vrednost: "",
      referentneVrednosti: "",
    },
    {
      id: 2,
      naziv: "Boja urina",
      vrednost: "",
      referentneVrednosti: "",
    },
    {
      id: 3,
      naziv: "Relativna gustina",
      vrednost: "",
      referentneVrednosti: "4.5 - 8",
    },
    {
      id: 4,
      naziv: "pH vrednost",
      vrednost: "",
      referentneVrednosti: "1.005 - 1.030",
    },
  ]);

  const InputChange = (newValue, id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, vrednost: newValue } : row
    );
    setRows(updatedRows);
  };

  const handleAgeChange = (newAge) => {
    setAge(newAge);
  };

  const handleGenderChange = (newGander) => {
    setGender(newGander);
  };
  const [highlightedRows, setHighlightedRows] = useState([]);
  const handleObradi = () => {
    const updatedHighLightedRows = [];
    rows.forEach((row) => {
      if (
        (row.vrednost !== "") &
        (row.naziv !== "Izgled") &
        (row.naziv !== "Boja urina")
      ) {
        const referentiOpseg = row.referentneVrednosti.split(" - ");
        const min = referentiOpseg[0];
        const max = referentiOpseg[1];
        const value = row.vrednost;
        if (value < min) {
          console.log(`Naziv: ${row.naziv} je nizak`);
          updatedHighLightedRows.push(row.id);
        } else if (value > max) {
          console.log(`Naziv: ${row.naziv} je visok`);
          updatedHighLightedRows.push(row.id);
        } else {
          console.log(`Naziv: ${row.naziv} je ODLICAN!`);
        }
      } else if ((row.naziv === "Izgled") & (row.vrednost !== "")) {
        const izgledValue = row.vrednost;
        if (izgledValue === "bistar") {
          console.log(`Naziv: ${row.naziv} je odlican`);
        } else if (izgledValue === "slaboZamucen") {
          console.log(`Naziv: ${row.naziv} je SLABO ZAMUCEN`);
        } else if (izgledValue === "zamucen") {
          console.log(`Naziv: ${row.naziv} je SLABO ZAMUCEN`);
        } else if (izgledValue === "mutan") {
          console.log(`Naziv: ${row.naziv} je SLABO MUTAN`);
        }
      } else {
        const bojaValue = row.vrednost;
        if (bojaValue === "zuta") {
          console.log("Zutaaaaaaaaaaaaaaaaaaaaaaaa");
        } else if (bojaValue === "svetloZuta") {
          console.log("TAMNOZUTA");
        } else if (bojaValue === "tamnoZuta") {
          console.log("TAAAAAAAAAAAAMNAAAAAAAAAAAAAAAAAAAAA");
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
          Fizicko-hemijski pregled urina
          <VaccinesOutlinedIcon sx={{ color: "rgba(255, 46, 206)" }} />
        </Typography>
        <Typography
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
            onChange={(e) => handleAgeChange(e.target.value)}
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
                  Fizicko-hemijski pregled urina
                </TableCell>
                <TableCell align="left" sx={{ fontWeight: "bold" }}>
                  Vrednost
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Referentne vrednosti
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
                  <TableCell
                    align="center"
                    sx={{
                      minWidth: "200px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {/* Uslovno renderovanje na osnovu naziva */}
                    {row.naziv === "Izgled" ? (
                      <FormControl
                        sx={{ flex: 1, minWidth: "200px", textAlign: "left" }}
                      >
                        <Select
                          labelId="select-izgled"
                          value={row.vrednost}
                          onChange={(e) => InputChange(e.target.value, row.id)}
                        >
                          <MenuItem value="bistar">Bistar</MenuItem>
                          <MenuItem value="slaboZamucen">
                            Slabo zamucen
                          </MenuItem>
                          <MenuItem value="zamucen">Zamucen</MenuItem>
                          <MenuItem value="mutan">Mutan</MenuItem>
                        </Select>
                      </FormControl>
                    ) : row.naziv === "Boja urina" ? (
                      <FormControl
                        sx={{ flex: 1, minWidth: "200px", textAlign: "left" }}
                      >
                        <Select
                          labelId="select-boja-urina"
                          value={row.vrednost}
                          onChange={(e) => InputChange(e.target.value, row.id)}
                        >
                          <MenuItem value="zuta">Žuta</MenuItem>
                          <MenuItem value="svetloZuta">Svetlo žuta</MenuItem>
                          <MenuItem value="tamnoZuta">Tamno žuta</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      <TextField
                        type="number"
                        value={row.vrednost}
                        onChange={(e) => InputChange(e.target.value, row.id)}
                        sx={{ flex: 1, maxWidth: "200px" }}
                        InputProps={{
                          inputProps: {
                            min: 0,
                          },
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", minWidth: "200px" }}
                  >
                    {row.referentneVrednosti}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <ThemeProvider theme={theme}>
                  <TableCell align="left" colSpan={1}>
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
export default Urin;
