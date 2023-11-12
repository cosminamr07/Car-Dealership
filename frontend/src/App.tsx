import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem, Select } from '@mui/material';
import {Component} from "./Components/Component"



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const App =() =>{
  return <div>
  <Checkbox {...label} />
  <Component id={2} name="Checkbox"/>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>

  </div>
}

export default App;
