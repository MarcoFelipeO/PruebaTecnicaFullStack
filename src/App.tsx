// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './components/Formulario';
import VehiculoListado from './components/VehiculoListado';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '4rem' }}> {/* Ajusta el padding superior para dar espacio a la navbar */}
        <Routes>
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/listado" element={<VehiculoListado />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
