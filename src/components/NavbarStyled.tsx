// src/components/NavbarStyled.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Contenedor del Navbar
export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #white;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 30px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Estilo para los enlaces
export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 26px;
  &:hover {
    text-decoration: underline;
  }
`;
