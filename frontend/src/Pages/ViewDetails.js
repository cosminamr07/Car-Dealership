  import * as React from 'react';
  import Avatar from '@mui/material/Avatar';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  import axios from 'axios';
  import { useLocation } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import backgroundImg from '../images/Capture.JPG'; 


  const defaultTheme = createTheme();

  export default function ViewDetails(props) {

    const [userDetails, setUserDetails] = React.useState({});
    const location = useLocation();
  const navigate = useNavigate();

    // const userData = (location.state && location.state.userData) ? location.state.userData : {};
    const emailFromLogin = (location.state && location.state.email) ? location.state.email : '';
    console.log("email+"+location.state.email);
  React.useEffect(() => {
    if (emailFromLogin) {
      console.log("a mers if ul")
      // Faceți solicitarea către findByEmail utilizând emailFromLogin
      axios.get("http://localhost:8080/User/FindByEmail", {
        params: { email: emailFromLogin },
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log("aici a ajunsss");
      setUserDetails(response.data);
       console.log("user"+userDetails.adresa);
    })
    .catch((error) => {
      console.log(error);
    });

    }
  }, [emailFromLogin]); 

  const handleBackButton = () => {
    // Adaugă logica pentru căutare
    navigate("/Platform",{ state: { userDetails,email:userDetails.email} });
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
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: `rgb(255, 255, 255)`,
              borderRadius: '8px',
              padding: '20px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Vizualizare date personale
            </Typography>

            <Box component="form" sx={{ mt: 3 }}>

              <TextField
              fullWidth
              label="Nume complet"
              variant="outlined"
              margin="normal"
              value={userDetails.fullName || ''}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              fullWidth
              label="Adresa de email"
              variant="outlined"
              margin="normal"
              value={userDetails.email || ''}
              InputProps={{
                readOnly: true,
              }}
            />
            
            <TextField
              fullWidth
              label="Adresa"
              variant="outlined"
              margin="normal"
              value={userDetails.adresa || ''}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              label="Numar telefon"
              variant="outlined"
              margin="normal"
              value={userDetails.nrTelefon || ''}
              InputProps={{
                readOnly: true,
              }}
            />

              {/* Alte câmpuri pentru detalii despre utilizator */}
              
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: `rgb(255, 153, 51)`,
                }}
              onClick={handleBackButton}
              >
                Inapoi la platforma
              </Button>
            </Box>
          </Box>
        </Container>
        </Box>

      </ThemeProvider>
    );
  }
