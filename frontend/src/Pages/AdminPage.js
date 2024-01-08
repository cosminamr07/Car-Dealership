import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import "../Style/AdminPage.css";
import { useNavigate } from 'react-router-dom';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Cypro+Minoan&family=Oswald:wght@500&display=swap');
</style>

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState(null);
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    fullName: '',
    userType: '',
    nrTelefon: '',
    adresa: '',
  });

  const [cars, setCars] = useState([]);
  const [editedCar, setEditedCar] = useState(null);
  const [newCar, setNewCar] = useState({
    idMasina: '',
    model: '',
    marca: '',
    an: '',
    motorizare: '',
    pret: '',
  });

  const handleLogout = () => {
    navigate("/Login");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (event, key) => {
    if (editedUser && editedUser.idUser === 'new') {
      setNewUser((prevNewUser) => ({
        ...prevNewUser,
        [key]: event.target.value,
      }));
    } else {
      setEditedUser((prevEditedUser) => ({
        ...prevEditedUser,
        [key]: event.target.value,
      }));
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/User/GetAllUsers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEdit = (user) => {
    setEditedUser({ ...user });
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:8080/User/Update', editedUser);
      fetchUsers();
      setEditedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = (user) => {
    console.log('Deleting user:', user);
    axios.post('http://localhost:8080/User/Delete', user)
      .then(() => {
        console.log('User deleted successfully');
        fetchUsers();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };
  
  const handleInsert = () => {
    setNewUser({
      email: '',
      password: '',
      fullName: '',
      userType: '',
      nrTelefon: '',
      adresa: '',
    });
    // Afișează formularul de inserare utilizator
    setEditedUser({ idUser: 'new' });
  };

  const handleSubmitNewUser = () => {
    // Verifică dacă toate câmpurile sunt completate
    if (Object.values(newUser).every(value => value !== '')) {
      axios.post('http://localhost:8080/User/Insert', newUser)
        .then(() => {
          fetchUsers();
          setEditedUser(null);
        })
        .catch(error => {
          console.error('Error inserting user:', error);
        });
    } else {
      alert('Completează toate câmpurile pentru noul utilizator!');
    }
  };

  
  const renderInputField = (user, key) => {
    return editedUser && editedUser.idUser === user.idUser ? (
      <TextField
        value={editedUser[key]}
        onChange={(e) => handleInputChange(e, key)}
      />
    ) : (
      user[key]
    );
  };
  
  
  const handleInputChangeCar = (event, key) => {
    if (editedCar && editedCar.idMasina === 'new') {
      setNewCar((prevNewCar) => ({
        ...prevNewCar,
        [key]: event.target.value,
      }));
    } else {
      setEditedCar((prevEditedCar) => ({
        ...prevEditedCar,
        [key]: event.target.value,
      }));
    }
  };
  
  const fetchCars = async () => {
  try {
    const response = await axios.get('http://localhost:8080/Masina/GetAllMasini');
    setCars(response.data);
  } catch (error) {
    console.error('Error fetching cars:', error);
  }
};

  const handleEditCar = (car) => {
    setEditedCar({ ...car });
  };

  const handleSaveCar = async () => {
    try {
      await axios.post('http://localhost:8080/Masina/Update', editedCar);
      fetchCars();
      setEditedCar(null);
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  const handleDeleteCar = (car) => {
    console.log('Deleting car:', car);
    axios.post('http://localhost:8080/Masina/Delete', car)
      .then(() => {
        console.log('Car deleted successfully');
        fetchCars();
      })
      .catch((error) => {
        console.error('Error deleting car:', error);
      });
  };

  const handleInsertCar = () => {
    setNewCar({
      marca: '',
      model: '',
      an: '',
      motorizare: '',
      pret: '',
      vandut: 'NU',
    });
    // Afișează formularul de inserare mașină
    setEditedCar({ idMasina: 'new' });
  };
  

  const handleSubmitNewCar = () => {
    // Verifică dacă toate câmpurile sunt completate
    if (Object.values(newCar).every(value => value !== '')) {
      axios.post('http://localhost:8080/Masina/Insert', newCar)
        .then(() => {
          fetchCars();
          setEditedCar(null);
        })
        .catch(error => {
          console.error('Error inserting car:', error);
        });
    } else {
      alert('Completează toate câmpurile pentru noua masina!');
    }
  };

  // const handleInputChangeCar = (event, key) => {
  //   setEditedCar((prevEditedCar) => ({
  //     ...prevEditedCar,
  //     [key]: event.target.value,
  //   }));
  // };
  
  const renderInputFieldCar = (car, key) => {
    return editedCar && editedCar.idMasina === car.idMasina ? (
      <TextField
        value={editedCar[key]}
        onChange={(e) => handleInputChangeCar(e, key)}
      />
    ) : (
      car[key]
    );
  };

  useEffect(() => {
    fetchCars();
  }, []);



  return (
    <div className="admin-container">
       <Button
          variant="contained"
          onClick={handleLogout}
        >
          Deconectare
        </Button>
      <h1>Utilizatori</h1>
      <Button variant="contained" color="primary" onClick={handleInsert}>
        Adauga utilizator
      </Button>
      {editedUser && editedUser.idUser === 'new' && (
        <div className="new-user-form">
          <TextField
            label="Email"
            value={newUser.email}
            sx={{backgroundColor:'white'}}

            onChange={(e) => handleInputChange(e, 'email')}
          />
          <TextField
            label="Password"
            type="password"
            value={newUser.password}
            sx={{backgroundColor:'white'}}

            onChange={(e) => handleInputChange(e, 'password')}
          />
          <TextField
            label="Full Name"
            value={newUser.fullName}
            sx={{backgroundColor:'white'}}

            onChange={(e) => handleInputChange(e, 'fullName')}
          />
          <TextField
            label="User Type"
            value={newUser.userType}
            sx={{backgroundColor:'white'}}

            onChange={(e) => handleInputChange(e, 'userType')}
          />
          <TextField
            label="Phone Number"
            value={newUser.nrTelefon}
            sx={{backgroundColor:'white'}}
            onChange={(e) => handleInputChange(e, 'nrTelefon')}
          />
          <TextField
            label="Address"
            value={newUser.adresa}
            sx={{backgroundColor:'white'}}

            onChange={(e) => handleInputChange(e, 'adresa')}
          />
          <Button variant="contained" color="primary" onClick={handleSubmitNewUser}>
            Submit
          </Button>
        </div>
      )}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Nume complet</th>
            <th>Tipul Utilizatorului</th>
            <th>Parola</th>
            <th>Numar telefon</th>
            <th>Adresa</th>
            <th>Actiuni</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.idUser}>
              <td>{user.idUser}</td>
              <td>{renderInputField(user, 'email')}</td>
              <td>{renderInputField(user, 'fullName')}</td>
              <td>{renderInputField(user, 'userType')}</td>
              <td>{renderInputField(user, 'password')}</td>
              <td>{renderInputField(user, 'nrTelefon')}</td>
              <td>{renderInputField(user, 'adresa')}</td>
              <td className="user-actions">
                {editedUser && editedUser.idUser === user.idUser ? (
                  <>
                    <Button className="button-primary" onClick={handleSave}>
                      Save
                    </Button>
                    <Button onClick={() => setEditedUser(null)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => handleEdit(user)}>
                      Edit
                    </Button>
                    <Button className="button-secondary" onClick={() => handleDelete(user)}>
                      Delete
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Mașini</h1>
      <Button variant="contained" color="primary" onClick={handleInsertCar}>
        Adauga masina
      </Button>
      {editedCar && editedCar.idMasina === 'new' && (
  <div className="new-car-form">
    <TextField
      label="Marca"
      value={newCar.marca}
      sx={{backgroundColor:'white'}}

      onChange={(e) => handleInputChangeCar(e, 'marca')}
    />
    <TextField
      label="Model"
      value={newCar.model}
      sx={{backgroundColor:'white'}}

      onChange={(e) => handleInputChangeCar(e, 'model')}
    />
    <TextField
      label="An"
      value={newCar.an}
      sx={{backgroundColor:'white'}}

      onChange={(e) => handleInputChangeCar(e, 'an')}
    />
    <TextField
      label="Motorizare"
      value={newCar.motorizare}
      sx={{backgroundColor:'white'}}

      onChange={(e) => handleInputChangeCar(e, 'motorizare')}
    />
    <TextField
      label="Pret"
      value={newCar.pret}
      sx={{backgroundColor:'white'}}

      onChange={(e) => handleInputChangeCar(e, 'pret')}
    />
    <Button variant="contained" color="primary" onClick={handleSubmitNewCar}>
      Submit
    </Button>
  </div>
)}
      <table className="car-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Model</th>
          <th>Marca</th>
          <th>An</th>
          <th>Motorizare</th>
          <th>Pret</th>
          <th>Stare Vanzare</th>
          <th>Acțiuni</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.idMasina}>
            <td>{car.idMasina}</td>
            <td>{renderInputFieldCar(car, 'model')}</td>
            <td>{renderInputFieldCar(car, 'marca')}</td>
            <td>{renderInputFieldCar(car, 'an')}</td>
            <td>{renderInputFieldCar(car, 'motorizare')}</td>
            <td>{renderInputFieldCar(car, 'pret')}</td>
            <td>{renderInputFieldCar(car, 'vandut')}</td>

            <td className="car-actions">
              {editedCar && editedCar.idMasina === car.idMasina ? (
                <>
                  <Button className="button-primary" onClick={handleSaveCar}>
                    Save
                  </Button>
                  <Button onClick={() => setEditedCar(null)}>
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => handleEditCar(car)}>
                    Edit
                  </Button>
                  <Button className="button-secondary" onClick={() => handleDeleteCar(car)}>
                    Delete
                  </Button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
