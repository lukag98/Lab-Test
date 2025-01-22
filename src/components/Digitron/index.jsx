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
import { BurstModeOutlined } from "@mui/icons-material";


const Digitron = () =>{

  const [visina,setVisina] = useState("");
  const [masa,setMasa] = useState("");
  const [bmi, setBmi] = useState(null);
  const [rezultat,setRezultat] = useState(null)


const handleVisinaChange = (newVisina) =>{
  setVisina(newVisina)
}

const handleMasaChange = (newMasa) =>{
  setMasa(newMasa)
}






const dveFunkcije = () =>{
  if (visina > 0 && masa > 0) {
    const bmiResult = masa / ((visina / 100) ** 2);
    setBmi(bmiResult.toFixed(1));

    if (bmiResult < 18) {
      setRezultat("Pothranjenost");
    } else if (bmiResult >= 18 && bmiResult < 25) {
      setRezultat("Normalna telesna masa");
    } else if (bmiResult >= 25 && bmiResult < 30) {
      setRezultat("Prekomerna telesna masa");
    } else if (bmiResult >= 30 && bmiResult < 40) {
      setRezultat("Gojaznost");
    } else {
      setRezultat("Patološka gojaznost");
    }
  } else {
    setBmi(null);
    setRezultat("Unesite validne vrednosti za visinu i masu.");
  }
}



return (<>

<Box>
  <TableContainer
    component={Paper}
    sx={{
      width: "80%",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
    }}
  >
    <Table sx={{ minWidth: 600 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell colSpan={2} align="center" style={{ fontWeight: "bold", color: "rgb(31,124,6)" }}>
            BMI kalkulator
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Visina(cm)</TableCell>
          <TableCell>
            <TextField
              type="number"
              placeholder="Visina u centrimetrima"
              value={visina}
              onChange={(e) => handleVisinaChange(parseInt(e.target.value))}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Masa(kg)</TableCell>
          <TableCell>
            <TextField
              type="number"
              placeholder="Masa u kilogramima"
              value={masa}
              onChange={(e) => handleMasaChange(parseInt(e.target.value))}
            />
          </TableCell>
        </TableRow>
        <TableRow>
                
                  <TableCell align="center" colSpan={2}>
                    <Button
                      color="violet"
                      variant="contained"
                      sx={{
                        border: 0,
                        width: "350px",
                        height: "50px",
                        borderRadius: 0,
                        fontWeight: "bold",
                         color: "rgb(31,124,6)"
                      }}
                      onClick={dveFunkcije}
                    >
                      Izracunaj
                    </Button>
                  </TableCell>
                
              </TableRow>
              {bmi !== null && (
                <TableRow>
                  <TableCell align="center">
                    <strong>Vaš BMI: </strong> {bmi} kg/m2
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                 <strong> Rezultat:  </strong>{rezultat} 
                  </TableCell>
                </TableRow>
                
              )}
              
      </TableBody>
    </Table>
  </TableContainer>
</Box>

</>)
}

export default Digitron;