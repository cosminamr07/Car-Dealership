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


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignIn() {
  const [email,setEmail] = React.useState("");//valoarea default
  const [password,setPassword] = React.useState("");
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    if (!email || !password) {
      alert('Te rugăm să completezi toate câmpurile.');
      return;
    }
  
    event.preventDefault();
  
    // Using FormData to log the form data (optional)
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  
    // Axios request to handle login
//    axios.get("http://localhost:8080/User/FindByEmail", {
//     params: { email: email },
//   },
//   {headers: { "content-Type": "application/json" },
// })
//   .then((response) => {
//     console.log("Response data:", response.data);
//     navigate('/Home');

//     // Rest of your code
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Update the axios request in handleSubmit
  axios
  .get("http://localhost:8080/User/CheckLogin", {
    params: {
      email: email,
      password: password,
    },
    headers: { "Content-Type": "application/json" },
  })
  .then((response) => {
    console.log("Response data:", response.data);

    // Check the response from the server
    if (response.data.startsWith("Redirect:")) {
      const redirectPath = response.data.replace("Redirect:", "");
      // Navigate to the redirected page
      navigate(redirectPath, { state: { userData: response.data, email: email } });
    } else {
      // Handle other cases
      alert('Invalid email or password');
    }
  })
  .catch((error) => {
    alert('Email sau parola gresita');

    console.log(error);
  });


    };
    
  const onEmailChanged  =(event)=>{
   setEmail(event.target.value);

  }
  const onPasswordChanged  =(event)=>{
    setPassword(event.target.value);
 
   }
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
        <CssBaseline/>
        <Box
            sx={{
              marginTop: 18,
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
            Logare
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              autoComplete="current-password"
              onChange={onPasswordChanged}

            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             // onClick={}
            >
              Logare
            </Button>
            <Grid container>
                <Grid item>
                  <Link href="/Register" variant="body2">
                    Nu ai inca un cont? Creeaza unul!
                  </Link>
                </Grid>
              </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </Box>
    </ThemeProvider>
  );
}
