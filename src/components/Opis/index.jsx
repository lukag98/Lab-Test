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


const Opis = () =>{



    return(<>
     <Box
        sx={{
          width: "80%",
          maxWidth: "1200px",
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
Krvna slika    
        </Typography>

        <Typography
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
Kompletna krvna slika je jedan od 
glavnih pokazatelja stanja organizma. Na 
osnovu toga može se utvrditi da li postoji neka skrivena bolest ili je organizam zdrav. U zavisnosti od toga da li u eritrocitima postoje određeni 
proteini , krv se deli na 4 krvne grupe: A, B, AB i 0. One među populacijom nisu ravnomerno raspoređene 0+ je najčešća a AB- je najređa. Takođe osobe
 0 krvne grupe su univerzalni davaoci, a primaju samo svoju grupu, dok su osobe sa AB krvnom grupom univerzalni primaoci i daju samo svojoj krvnoj
  grupi.
    

</Typography>

      </Box>
    <Box
        sx={{
          width: "80%",
          maxWidth: "1200px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >

<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
Leukociti ili bela krvna zrnca (WBC - White Blood Cell)         
        </Typography>
<Typography
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

    

Leukociti se u organizmu ne stvaraju samo u krvi nego i u limfnom sistemu. Proizvodi ih direktno koštana srž i to njene ćelije koje se još zovu i matične ćelije hematopoeze. Leukociti su daleko složenija krvna zrnca od npr. eritrocita jer imaju jezgro.
Prema poreklu, obliku jedra i izgledu citoplazme leukociti se dele na: granulocite (granule koje učestvuju u alergijskim reakcijama), limfociti (glavna uloga im je u imunološkom odbrambenom sistemu organizma) i monociti (pri bubrenju postaju sposobni da se bore sa infekcijom odnosno štite od bakterijskih mikroorganizama).
Broj leukocita u ljudskoj krvi je otprilike oko 1% kompletne zapremine krvi u telu. Pri određivanju leukocita uvek se radi i diferencijalna krvna slika, tj. određuje se broj pojedinih leukocita. Na taj način se može tačno ustanoviti postojanje različitih bolesti i stanja.
Granulociti su vrsta leukocita koji se nalaze u citoplazmi. Deo su urođenog imunog sistema. Postoje tri vrste granulocita u krvi: neutrofilni, eozinofilni i bazofilni granulociti. Proizvode se od matičnih ćelija u koštanoj srži. Njihova uloga je da napadnu strane supstance koje izazivaju zapaljenje i infekcije.
</Typography>

<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
Limfociti (LYM)       
        </Typography>


<Typography
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

Limfociti imaju ulogu u odbrani organizma od virusnih infekcija, 
pa se tako limfocitoza (povišen apsolutan broj limfocita iznad 5,5 x 109/L)
najčešće sreće u virusnim infekcijama (infektivna mononukleoza, citomegalovirus, hepatitisi),
ali i u hroničnoj limfocitnoj leukemiji, tireotoksikozi, pri terapiji nekim lekovima,… 
dok se snižen apsolutan broj limofcita u perifernoj krvi kod odraslih tj. limfopenija (0,6 x 109/L) sreće u neoplazmama ili je posledica lečenja antineoplastičnim lekovima ili pri gladovanju.
</Typography>



<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
Granulociti (GRA)      
        </Typography>

<Typography
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

Neutrofili (neutrofilni granulociti) su najzastupljeniji među granulocitima i predstavljaju prvu liniju odbrane od bakterijske infekcije. Neutrofilija (apsolutan broj neutrofila iznad 8,6 x 109/L) može biti akutna (u akutnoj bakterijskoj infekciji, trudnoći, stresu, pri napornoj fizičkoj aktivnosti, pri porođaju, infarktu, za vreme operacije, pri opekotinama, traumi, kod terapije nekim lekovima,…) ili hronična (hronična inflamacija, malignitet, diabetes mellitus, uremija, nekroza tkiva, hronična hemoliza…). U bakterijskoj infekciji je udružena sa pozitivnim reaktantima akutne faze, kao što je C reaktivni protein (CRP). Posledica sniženog apsolutnog broj neutrofila ispod 2,3 x 109/L naziva se neutropenija, a najčešći uzroci su akutna infekcija virusima, autoimune bolesti, lekovi, parazitarne infekcije.
Eozinofilni granulociti (eozinofili) predstavljaju subpopulaciju leukocita čija je primarna uloga u organizmu zaštita od parazitarnih infekcija, kada se javlja eozinofilija (povišen apsolutan broj eozinofila u perfiernoj krvi iznad 0,5 x 109/L), a mogu biti povišeni i u alergijskim stanjima (astma, atopijski dermatitis, urtikarija, itd.), u nekim gastrointestinalnim i dermatološkim bolestima, bolestima vezivnog tkiva i drugo.
Bazofilni granulociti (bazofili) predstavljaju medijatore u odgovorima na upalu pa se sreću povišeni iznad 0,15 x 109/L (bazofilija) u infekcijama, hroničnim mijeloproliferativnim oboljenjima, ulceroznom kolitisu, reakcijama preosetljivosti (lekovi, hrana), ali i fiziološkim stanjima (trudnoća, ovulacija)…
</Typography>





<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
Broj eritrocita, Rbc (1012/L) ili broj crvenih krvnih zrnaca    
        </Typography>

<Typography
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

Eritrociti sadrže veliku količinu hemoglobina, pa je njihova glavna uloga u transportu kiseonika u cirkulaciji. Međutim, i pored toga, predstavljaju parametar sa malom dijagnostičkom vrednošću zato što i minimalne promene u volumenu plazme (dehidratacija, dijareja, itd.) menjaju njihov broj. Stoga se uvek posmatra samo sa hemoglobinom i hematokritom u kombinaciji. Referentne vrednosti se razlikuju u odnosu na pol (kod odraslih muškaraca je viši nego kod žena) i uzrast.
</Typography>


<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
Hemoglobin, HGB (g/L)  
        </Typography>


<Typography
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

Hemoglobin je hemprotein, koji vezuje dvovalentno gvožđe (Fe2+) u cirkulaciji I time omogućava oksigenaciju i prenos kiseonika iz pluća do perifernih tkiva, što je njegova osnovna uloga u organizmu. Stoga je njegova koncentracija osnovni laboratorijski parametar za postavljanje dijagnoze i diferencijacije anemija, koje prema deficitu hemoglobina mogu biti: blage, srednje teške, teške i po život opasne. Koncentracija hemoglobina u krvi pokazuje cirkadijalni ritam, pri čemu su njegove vrednosti najviše ujutro, a referentne vrednosti za hemoglobin se razlikuju u odnosu na rasu, starost i pol (kod odraslih muškaraca vrednosti su više nego kod žena).
</Typography>


<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
Hematokrit, HCT
        </Typography>

<Typography
 sx={{
    marginBottom: "16px",
    textAlign: "left",
    display: "flex",
    gap: "10px", // Razmak između ikone i teksta
    padding: "16px", // Unutrašnji razmak
    backgroundColor: "#f5f5f5", // Svetlosiva pozadina za bolji izgled
    borderRadius: "8px", // Zaobljeni uglovi
  }}>

Predstavlja odnos volumena eritrocita i volumena pune krvi u uzorku kapilarne ili venske krvi. Uz hemoglobin i broj eritrocita predstavlja parametar za procenu postojanja anemije. Referentne vrednosti se razlikuju u odnosu na pol (kod odraslih muškaraca je viši nego kod žena) i uzrast (deca, odrasli).
</Typography>


<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
MCV (fL) - prosečna zapremina eritrocita
        </Typography>

<Typography
 sx={{
    marginBottom: "16px",
    textAlign: "left",
    display: "flex",
    gap: "10px", // Razmak između ikone i teksta
    padding: "16px", // Unutrašnji razmak
    backgroundColor: "#f5f5f5", // Svetlosiva pozadina za bolji izgled
    borderRadius: "8px", // Zaobljeni uglovi
  }}>


Predstavlja eritrocitni indeks koji služi za klasifikaciju anemija, rano otkrivanje sekundarnih anemija (koje nastaju kao posledica nekih stanja i bolesti) i ispitivanje etiologije anemija. Na osnovu ovog parametra, anemije se dele na normocitne (80-100 fL), mikrocitne ({"<"}80 fL) i makrocitne ({">"}110 fL) anemije.
</Typography>


<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
MCH (pg) - prosečna količina hemoglobina u eritrocitu
        </Typography>

<Typography
 sx={{
    marginBottom: "16px",
    textAlign: "left",
    display: "flex",
    gap: "10px", // Razmak između ikone i teksta
    padding: "16px", // Unutrašnji razmak
    backgroundColor: "#f5f5f5", // Svetlosiva pozadina za bolji izgled
    borderRadius: "8px", // Zaobljeni uglovi
  }}>

Izvedena je veličina koja predstavlja odnos koncentracije hemoglobina i broja eritrocita u krvi. Može biti normalan, snižen ili povišen u zavisnosti od bolesti ili stanja pacijenta.
</Typography>

<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
MCHC (g/L) - prosečna koncentracija hemoglobina u eritrocitima
        </Typography>

<Typography
 sx={{
    marginBottom: "16px",
    textAlign: "left",
    display: "flex",
    gap: "10px", // Razmak između ikone i teksta
    padding: "16px", // Unutrašnji razmak
    backgroundColor: "#f5f5f5", // Svetlosiva pozadina za bolji izgled
    borderRadius: "8px", // Zaobljeni uglovi
  }}>

Izvedena je veličina koja upućuje na sadržaj hemoglobina u eritrocitima odnosno morfologiju eritrocita. Ne zavisi od uzrasta ni pola. Može biti normalan ili snižen, ali fiziološki ne može biti veći od 370 g/L jer eritrociti ne mogu da sadrže više od 370 g/L hemoglobina.
</Typography>


<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
RDW (indeks anizocitoze)
        </Typography>

<Typography
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
RDW (indeks anizocitoze) (%) je parametar koji ukazuje na stepen heterogenosti u volumenu eritrocita, odnosno predstavlja varijaciju u veličini eritrocita. Vrednosti zavise od vrste hematološkog brojača, pa tako referentni intervali variraju u širokom rasponu. Uporedo sa MCV parametrom, olakšava morfološku klasifikaciju anemija.
</Typography>

<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
PLT - Trombociti 
        </Typography>
<Typography
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
Trombociti (Plt), eng. platelets (krvne pločice) su parametar u okviru KKS koji u organizmu ima ulogu u zaustavljanju krvarenja.
</Typography>

<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
MPV
        </Typography>
<Typography
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
MPV (fL) ili srednja zapremina trombocita se uvek posmatra zajedno sa brojem trombocita u KKS. Ima ograničen značaj zbog fiziološke varijacije u veličini trombocita kod zdravih osoba. Visok MPV u KKS upućuje na velike ili džinovske trombocite (koji su prisutni u sepsi), dok trombocitopenija sa povišenim MPV ima klinički značaj kod hemato-onkoloških pacijenata.
</Typography>


<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
PDW u krvi
        </Typography>

<Typography
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

Parametar koji predstavlja heterogenost u veličini trombocita. Obično je povišen nakon transfuzije krvi, kada se zapaža varijacija u veličini trombocita.
</Typography>

<Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "left",
            color: "rgb(31,124,6)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
PCT - trombokrit
        </Typography>
<Typography
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
PCT (L/L) (trombokrit) je analog hematokritu i odražava stvaran broj trombocita u krvi.
</Typography>
</Box>









</>)
}


export default Opis