/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import axios from '../../services/axios';
import history from '../../services/history';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/loading';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome precisa ter pelo menos 3 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (password.length < 6 || password.length > 255) {
      formErrors = true;
      toast.error('Senha precisa ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    setIsLoading(true);

    try {
      await axios.post('/users/', {
        nome,
        email,
        password,
      });
      toast.success('Usuário registrado');
      setIsLoading(false);
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Crie sua Conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>

        <button type="submit">Registrar</button>
      </Form>
    </Container>
  );
}

export default Register;
