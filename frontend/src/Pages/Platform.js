import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/Platform.css'; 
import { useLocation } from 'react-router-dom';


export default function Platform(props) {
  const [searchText, setSearchText] = useState('');
  const [year, setYear] = useState('');
  const location = useLocation();

  const [cylinderCapacity, setCylinderCapacity] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const emailFromLogin = (location.state && location.state.email) ? location.state.email : '';
  const [userDetails, setUserDetails] = React.useState({});
  //console.log("Platform"+location.state.adresa);


  useEffect(() => {
  
    axios
      .get("http://localhost:8080/User/FindByEmail", {
        params: { email: emailFromLogin},
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log("API error:", error);
      });
  }, [userDetails]);
  // console.log(userDetails.adresa);
  const handleViewDetails = () => {
    console.log("aici"+userDetails.email);
    navigate('/ViewDetails', { state: { userDetails,email:userDetails.email} });
  };

  const handleSearch = () => {
    // Adaugă logica pentru căutare
    console.log('Searching...');
  };

  const handleLogout = () => {
    // Adaugă logica pentru deconectare
    navigate("/Login");
  };

  return (
    <div className="platform-container">
      <TextField
        label="Caută mașini"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="filter-container">
        <TextField
          label="An"
          type="number"
          variant="outlined"
          margin="normal"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <TextField
          label="Capacitate cilindrică"
          type="number"
          variant="outlined"
          margin="normal"
          value={cylinderCapacity}
          onChange={(e) => setCylinderCapacity(e.target.value)}
        />
        <TextField
          label="Preț"
          type="number"
          variant="outlined"
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Caută
      </Button>

      <div className='buttons'>
        <Button
          fullWidth
          variant="contained"
          onClick={handleViewDetails}
        >
          Vizualizare detalii personale
        </Button>

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogout}
        >
          Deconectare
        </Button>
      </div>
    </div>
  );
};
