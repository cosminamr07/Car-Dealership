import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import "../Style/Transaction.css"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Cypro+Minoan&family=Oswald:wght@500&display=swap');
</style>
export default function Transaction() {
  const navigate = useNavigate();
  const location = useLocation();
  const [idMasina, setIdMasina] = React.useState('');

  const [numeClient, setNumeClient] = React.useState('');
  const [numarTelefon, setNumarTelefon] = React.useState('');
  const [adresa, setAdresa] = React.useState('');
  const [marcaMasina, setMarcaMasina] = React.useState('');
  const [modelMasina, setModelMasina] = React.useState('');
  const [anMasina, setAnMasina] = React.useState('');
  const [motorizare, setMotorizare] = React.useState('');
  const [pret, setPret] = React.useState('');
  const [angajatAles, setAngajatAles] = React.useState('');
  const [client,setClient] = React.useState('');
  

  const userDetails = location.state ? location.state.userDetails : {};
  
  React.useEffect(() => {
    // Setează automat detaliile clientului și ale mașinii în câmpurile formularului dacă acestea sunt disponibile
    setNumeClient(userDetails.fullName);
    setNumarTelefon(userDetails.nrTelefon);
    setAdresa(userDetails.adresa);

    const carDetails = location.state ? location.state.carDetails : {};
    setIdMasina(carDetails.idMasina);
    setMarcaMasina(carDetails.marca || '');
    setModelMasina(carDetails.model || '');
    setAnMasina(carDetails.an || '');
    setMotorizare(carDetails.motorizare || '');
    setPret(carDetails.pret || '');

    axios.get('http://localhost:8080/Angajat/Random')
      .then(response => {
        setAngajatAles(response.data);
      })
      .catch(error => {
        console.error('Eroare la obținerea angajatului aleatoriu:', error);
      });
  }, [userDetails, location.state]);
  const handleBack = () => {
    navigate(`/Platform`, { state: { userDetails,email:userDetails.email } });
    // Implementați logica pentru a naviga către pagina platformei
    // de exemplu, puteți utiliza navigate('/platforma') sau ce cale aveți definită
  };


  const handleTransaction = () => {
    // Adaugă logica pentru finalizarea tranzacției
    console.log('Nume Client:', numeClient);
    console.log('Număr Telefon:', numarTelefon);
    console.log('Adresa:', adresa);
    console.log('ID Masina:', idMasina);

    // Informații despre mașină
    console.log('Marca Masina:', marcaMasina);
    console.log('Model Masina:', modelMasina);
    console.log('An Masina:', anMasina);
    console.log('Motorizare:', motorizare);
    console.log('Preț:', pret);

    console.log('Angajat Ales:', angajatAles);
    axios.post('http://localhost:8080/Tranzactie/Insert', {
      idClient: userDetails.idClient,
      idAngajat: angajatAles.idAngajat,
      numeClient:numeClient,
      pretTranzactie: parseFloat(pret),
      numeAngajat: angajatAles.numeAngajat,
      masina: `${marcaMasina} ${modelMasina}`,
      idMasina:idMasina // 
    })
    .then(response => {
      console.log('idClient:', userDetails.idClient);
      console.log('idAngajat:', angajatAles.idAngajat);
      console.log('idMasina:', idMasina);

      console.log('Tranzacție adăugată cu succes!');
      navigate(`/Success`, { state: { userDetails } });
    })
    .catch(error => {
      console.error('Eroare în adăugarea tranzacției:', error);
    });
  };
  return (
    <div component="main" className="transaction-container background-image">
      <div className="transaction-box">
        <Typography component="h1" variant="h5" className="transaction-title">
          Tranzacție
        </Typography>
        <form noValidate className="transaction-form">
          <div className="grid-container">
            <div className="grid-item">
              <TextField
                margin="normal"
                required
                fullWidth
                name="numeClient"
                label="Nume Client"
                type="text"
                id="numeClient"
                value={numeClient}
                InputProps={{
                  readOnly: true,
                }}
                onChange={(e) => setNumeClient(e.target.value)}
              />
            </div>
          <TextField
            margin="normal"
            required
            fullWidth
            name="numarTelefon"
            label="Număr Telefon"
            type="text"
            id="numarTelefon"
            value={numarTelefon}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setNumarTelefon(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="adresa"
            label="Adresa"
            type="text"
            id="adresa"
            value={adresa}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setAdresa(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="marcaMasina"
            label="Marca Mașină"
            type="text"
            id="marcaMasina"
            value={marcaMasina}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setMarcaMasina(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="modelMasina"
            label="Model Mașină"
            type="text"
            id="modelMasina"
            value={modelMasina}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setModelMasina(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="anMasina"
            label="An Mașină"
            type="text"
            id="anMasina"
            value={anMasina}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setAnMasina(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="motorizare"
            label="Motorizare"
            type="text"
            id="motorizare"
            value={motorizare}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setMotorizare(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pret"
            label="Preț"
            type="text"
            id="pret"
            value={pret}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setPret(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="angajatAles"
            label="Angajat Ales"
            type="text"
            id="angajatAles"
            value={angajatAles.numeAngajat}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setAngajatAles(e.target.value)}
          />
            </div>
          <div className='buttonClass'>  
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleTransaction}
          >
            Finalizează Tranzacția
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleBack}
          >
            Inapoi in platforma
            </Button>
          </div> 
        </form>
      </div>
    </div>
  );
}