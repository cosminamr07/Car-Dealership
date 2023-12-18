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
import backgroundImg from '../images/dodge.jpg';
const defaultTheme = createTheme();

export default function Platform() {

  const [userData, setUserData] = React.useState({
    fullName: '',
    email: '',
    password: '',
    adresa: '',
    telefon: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions on form submission
    // For example, you can update user information here
  };
    // const onFullNameChanged = (event) => {
    //   setFullName(event.target.value);
    // };
  
    // const onEmailChanged = (event) => {
    //   setEmail(event.target.value);
    // };
  
    // const onPasswordChanged = (event) => {
    //   setPassword(event.target.value);
    // };
  

    return( 
<ThemeProvider theme={defaultTheme}>
        <Box
        sx={{
          // backgroundImage: `url(${backgroundImg})`,
          backgroundColor: `rgb(255, 153, 51)`, // Set background color to red using RGB values
        
          backdropFilter: 'blur(10px)',

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
            backgroundColor: `rgb(255, 255, 255)`, // Set background color to red using RGB values
            borderRadius: '8px', // Optional: add border-radius for a rounded look
            padding: '20px', // Optional: add padding for spacing
          }}
        >
         
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Vizualizare date personale
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              {Object.entries(userData).map(([field, value]) => (
                <TextField
                  key={field}
                  margin="normal"
                  required
                  fullWidth
                  id={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={value}
                  autoComplete={field}
                  autoFocus
                  InputProps={{
                    readOnly: true,
                  }}
                />
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: `rgb(255, 153, 51)`,
                }}
              >
                Editare
              </Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: `rgb(255, 153, 51)`,
                }}
              >
                Button
              </Button>
            </Box>
          </Box>
      </Container>
      </Box>
      </ThemeProvider>
    );

}