import React, { useState } from 'react';
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import AnimalCadastro from './pages/AnimalCadastro';
import './App.css';

function App() {

  return (
    <div className='app-container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/registrar' element={<Registro />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/animalcadastro' element={<AnimalCadastro />} />
          <Route path='/animalcadastro/:id' element={<AnimalCadastro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
