// src/store/vehiculosSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Vehiculo {
  rut: string;
  nombre: string;
  patente: string;
  marca: string;
  modelo: string;
  precio: number;
}

export interface VehiculoState {
  vehiculos: Vehiculo[];
}

const initialState: VehiculoState = {
  vehiculos: [],
};

const vehiculoSlice = createSlice({
  name: 'vehiculos',
  initialState,
  reducers: {
    agregarVehiculo: (state, action: PayloadAction<Vehiculo>) => {
      state.vehiculos.push(action.payload);
    },
    eliminarVehiculo: (state, action: PayloadAction<string>) => {
      state.vehiculos = state.vehiculos.filter(vehiculo => vehiculo.patente !== action.payload);
    },
  },
});

export const { agregarVehiculo, eliminarVehiculo } = vehiculoSlice.actions;
export default vehiculoSlice.reducer;
