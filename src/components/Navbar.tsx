// src/components/Navbar.tsx
import React from 'react';
import { NavbarContainer, NavLink } from './NavbarStyled';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavLink to="/formulario">Formulario</NavLink>
      <NavLink to="/listado">Listado Formulario </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
