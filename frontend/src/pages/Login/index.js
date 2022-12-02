import React from 'react';

import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <p>lorem</p>
      <button onClick={handleClick} type="button">
        Enviar
      </button>
    </Container>
  );
}

export default Login;
