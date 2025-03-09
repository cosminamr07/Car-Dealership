import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImg from '../images/background.jpg';


const defaultTheme = createTheme();

export default function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');



  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    if (!fullName || !email || !password) {
      alert('Te rugăm să completezi toate câmpurile.');
      return;
    }
    if(password.length<8){
      alert('Parola trebuie sa continua minim 5 caractere');
      return;

    }
    if(phoneNumber.length!=10)
    {
      alert('Numar de telefon incorect');
      return;

    }
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullName: data.get('fullName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  //  axios.post("http://localhost:8080/User/Insert",data.post(''),{headers:{"content-type":"application/json"}
    axios.post('http://localhost:8080/User/Insert', {
      email: email,
      password: password,
      fullName: fullName,
      nrTelefon:phoneNumber,
      adresa:address,
      userType:"client"

  },{headers:{"content-type":"application/json"},})
    .then(function (response) {
      console.log(response);
      navigate('/Login');

      // if(response.data.id>=1){
      //   console.log("done");

      // }
    })
    .catch(function (error) {
      console.log(error);
    });
  // }) .then((response) =>{
  //     console.log(response)
  //     if(response.data.id>=1)
  //       navigate("../Home") 
  //   })
  };
  const onFullNameChanged = (event) => {
    setFullName(event.target.value);
  };

  const onEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChanged = (event) => {
    setPassword(event.target.value);
  };
  const onPhoneNumberChanged = (event) => {
    setPhoneNumber(event.target.value);
  };
  const onAddressChanged = (event) => {
    setAddress(event.target.value);
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white', // Set background color to white
              borderRadius: '8px', // Optional: add border-radius for a rounded look
              padding: '20px', // Optional: add padding for spacing
            }}
          >
           
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Creeaza un cont
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Nume complet"
                name="fullName"
                autoComplete="Full name"
                autoFocus
                onChange={onFullNameChanged}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresa de email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={onEmailChanged}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Parola"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={onPasswordChanged}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Numar telefon"
                label="Numar telefon"
                id="Numar telefon"
                autoComplete="Numar telefon"
                onChange={onPhoneNumberChanged}
              />
              <TextField
              margin="normal"
              required
              fullWidth
              name="Adresa"
              label="Adresa"
              id="Adresa"
              autoComplete="Adresa"
              onChange={onAddressChanged}
            />

             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Inregistrare
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/Login" variant="body2">
                    Ai deja un cont? Logheaza-te !
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
