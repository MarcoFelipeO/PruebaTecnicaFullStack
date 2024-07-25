// src/components/VehiculoListado.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { ListadoContainer, Table, Button } from './VehiculoListadoStyled';
import { eliminarVehiculo } from '../store/vehiculosSlice';

interface Vehiculo {
  rut: string;
  nombre: string;
  patente: string;
  marca: string;
  modelo: string;
  precio: number;
}

const VehiculoListado: React.FC = () => {
  const dispatch = useDispatch();
  const vehiculos: Vehiculo[] = useSelector((state: RootState) => state.vehiculos.vehiculos);

  const vehiculosOrdenados = [...vehiculos].sort((a, b) => b.patente.localeCompare(a.patente));

  const ultimosVehiculos = vehiculosOrdenados.slice(0, 10);

  const handleEliminar = (patente: string) => {
    dispatch(eliminarVehiculo(patente));
  };

  return (
    <ListadoContainer>
      <h1>Lista formulario</h1>
      {ultimosVehiculos.length === 0 ? (
        <p>No hay vehículos para mostrar.</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rut Vendedor</th>
              <th>Patente vehiculo</th>
              <th>Marca vehiculo</th>
              <th>Modelo vehiculo</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {ultimosVehiculos.map((vehiculo: Vehiculo) => (
              <tr key={vehiculo.patente}>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.rut}</td>
                <td>{vehiculo.patente}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
                <td>
                  <Button onClick={() => handleEliminar(vehiculo.patente)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ListadoContainer>
  );
};

export default VehiculoListado;
