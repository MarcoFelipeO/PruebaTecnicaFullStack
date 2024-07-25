// src/components/VehiculoListadoStyled.ts
import styled from 'styled-components';

export const ListadoContainer = styled.div`
  margin: 2rem auto; /* Centra el listado en la página */
  max-width: 1200px; /* Ajusta el ancho máximo del contenedor */
  padding: 1rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }
`;


export const Button = styled.button`
  padding: 5px 10px;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;