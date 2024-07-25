// src/components/FormularioStyled.ts
import styled from 'styled-components';

// Contenedor principal del formulario
export const FormularioContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px; /* Ajusta este valor según el tamaño de tu navbar */
  padding: 20px;
`;

// Título del formulario
export const FormTitle = styled.h1`
  text-align: left;
  color: #333;
`;

// Sección del formulario (cada parte del formulario)
export const FormSection = styled.div`
  margin-bottom: 20px;
`;

// Título de cada sección
export const SectionTitle = styled.h2`
  color: #444;
  margin-bottom: 10px;
`;

// Contenedor de campos del formulario
export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

// Etiquetas
export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #007BFF; /* Color azul */
`;

// Campos de entrada
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

// Botón del formulario
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// Contenedor para los campos del formulario de datos del vendedor y vehículo
export const FormFieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;
  & > div {
    flex: 1;
    min-width: 200px;
  }
`;

