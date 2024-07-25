// src/components/Formulario.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarVehiculo } from '../store/vehiculosSlice';
import { FormularioContainer, FormField, Label, Input, Button, FormTitle, SectionTitle, FormSection, FormFieldsContainer } from './FormularioStyled';

const Formulario: React.FC = () => {
  const dispatch = useDispatch();

  const [rut, setRut] = useState('');
  const [nombre, setNombre] = useState('');
  const [patente, setPatente] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(agregarVehiculo({
      rut,
      nombre,
      patente,
      marca,
      modelo,
      precio: parseFloat(precio)
    }));

    setRut('');
    setNombre('');
    setPatente('');
    setMarca('');
    setModelo('');
    setPrecio('');
  };

  return (
    <FormularioContainer>
      <FormTitle>Nuevo Formulario</FormTitle>
      <FormSection>
        <SectionTitle>Datos del Vendedor:</SectionTitle>
        <form onSubmit={handleSubmit}>
          <FormFieldsContainer>

            <FormField>
              <Label>Nombre completo</Label>
              <Input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </FormField>

            <FormField>
              <Label>Rut vendedor</Label>
              <Input type="text" value={rut} onChange={(e) => setRut(e.target.value)} required />
            </FormField>

          </FormFieldsContainer>
        </form>
      </FormSection>

      <FormSection>
        <SectionTitle>Datos del Vehículo:</SectionTitle>
        <form onSubmit={handleSubmit}>
          <FormFieldsContainer>
            <FormField>
              <Label>Patente del vehiculo</Label>
              <Input type="text" value={patente} onChange={(e) => setPatente(e.target.value)} required />
            </FormField>
            <FormField>
              <Label>Marca del vehiculo</Label>
              <Input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} required />
            </FormField>
            <FormField>
              <Label>Modelo del vehiculo</Label>
              <Input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
            </FormField>
            <FormField>
              <Label>Precio del vehiculo</Label>
              <Input type="number" step="0.01" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
            </FormField>
          </FormFieldsContainer>
          <Button type="submit">Enviar</Button>
        </form>
      </FormSection>
      
    </FormularioContainer>
  );
};

export default Formulario;
