import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();

  const userDetails = location.state ? location.state.userDetails : {};

  const handleNavigateToPlatform = () => {
    navigate(`/Platform`, { state: { userDetails,email:userDetails.email } });
    // Implementați logica pentru a naviga către pagina platformei
    // de exemplu, puteți utiliza navigate('/platforma') sau ce cale aveți definită
  };

  const handleLogout = () => {
    navigate("/Login");

    // Implementați logica pentru delogare
    // de exemplu, puteți utiliza navigate('/delogare') sau ce cale aveți definită pentru delogare
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:'white',
          height:200
        }}
      >
        <Typography component="h1" variant="h5" sx={{ color: 'green' ,backgroundColor:'white'}}>
          Tranzacție finalizată cu succes
        </Typography>

        {/* Aici puteți adăuga orice alt conținut dorit pentru pagina de succes */}

        <Box sx={{ mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, backgroundColor: 'green', color: 'white' }}
            onClick={handleNavigateToPlatform}
          >
            Către Platformă
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 1, backgroundColor: 'green', color: 'white' }}
            onClick={handleLogout}
          >
            Delogare
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
