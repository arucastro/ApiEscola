import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={21} />
      </Link>
      <Link to="/logout">
        <FaSignInAlt size={24} />
      </Link>
      <h2>{botaoClicado ? 'Clicado' : 'Não Clicado'}</h2>
    </Nav>
  );
}

export default Header;
