import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/PlatformStyle.css';
import { useLocation } from 'react-router-dom';
import backgroundImg from '../images/Capture.JPG'; 

export default function Platform(props) {

  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [cylinderCapacity, setCylinderCapacity] = useState('');
  const [price, setPrice] = useState('');
  const [filteredCars, setFilteredCars] = useState([]); // State to store filtered cars
  const [userDetails, setUserDetails] = useState({}); // State to store user details
  const [stareVanzare,setStareVanzare]  = useState({}); 
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromLogin = (location.state && location.state.email) ? location.state.email : '';

  useEffect(() => {
    // Fetch user details when the component mounts
    axios
      .get("http://localhost:8080/User/FindByEmail", {
        params: { email: emailFromLogin },
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        // Set user details in state
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log("API error:", error);
      });
  }, [emailFromLogin]);

  const handleViewDetails = () => {
    navigate('/ViewDetails', { state: { userDetails, email: userDetails.email } });
  };
  

  
  const handleSearch = () => {
    // Prepare the search criteria

    if(brand.length==0)
    {
      alert("Introdu o marca de masini!");
      return;
    }
    const searchCriteria = {
      marca: brand !== '' ? brand : null,
      an: year !== '' ? parseInt(year) : null,
      motorizare: cylinderCapacity !== '' ? parseFloat(cylinderCapacity) : null,
      pret: price !== '' ? parseFloat(price) : null,
      stareVanzare: 'NU', // Caută doar mașinile cu stareVanzare setată la "NU"
    };

    // Remove null or undefined values from the search criteria
    const filteredSearchCriteria = Object.fromEntries(
      Object.entries(searchCriteria).filter(([_, value]) => value !== null && value !== undefined)
    );

    // Make a request to the backend to get filtered car data
    axios.get('http://localhost:8080/Masina/Search', { params: filteredSearchCriteria })
      .then((response) => {
        // Set the filtered car data in state
        setFilteredCars(response.data);
      })
      .catch((error) => {
        console.error('Error searching for cars:', error);
      });
  };


  const handleLogout = () => {
    navigate("/Login");
  };

  const handleReset = () => {
    setBrand('');
    setYear('');
    setCylinderCapacity('');
    setPrice('');
  };

  const handleBuy = (carId) => {
    // Navigate to the Transaction page and pass the car details and user details
    const selectedCar = filteredCars.find(car => car.idMasina === carId);
    console.log(selectedCar.idMasina);
    navigate(`/Transaction`, { state: { userDetails, carDetails: selectedCar } });
  };


  return (
    <div className="platform-container">
      <div className="filter-container">
        <TextField
          label="Marca"
          variant="outlined"
          margin="normal"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
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
          label="Buget maxim"
          type="number"
          variant="outlined"
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className='filterButtons'>
      <Button  variant="contained" color="primary" onClick={handleSearch}>
        Caută
      </Button>
      <Button variant="contained" color="primary" onClick={handleReset}>
        Resetează
      </Button>
      </div>

      <div className='buttons'>
        <Button
          variant="contained"
          onClick={handleViewDetails}
        >
          Vizualizare detalii personale
        </Button>

        <Button
          variant="contained"
          onClick={handleLogout}
        >
          Deconectare
        </Button>
      </div>
    <div className='background-cars'>
      {/* Display filtered cars */}
      <div className="filtered-cars-container">
        <h2>Rezultate găsite:</h2>
        <ul>
          {filteredCars.map((car) => (
            <li key={car.id}>
              {car.marca} {car.model} An {car.an} Motorizare {car.motorizare}L Pret {car.pret} Euro
              <Button variant="contained" color="secondary" onClick={() => handleBuy(car.idMasina)}>
              Cumpărare
            </Button>
            </li>
          ))}
        </ul>
      </div>
      </div>

    </div>
  );
};
