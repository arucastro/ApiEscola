import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 150px;
    height: 150px;
    display: flex;
    background: #eee;
    border: 3px dashed ${colors.primaryColor};
    cursor: pointer;
    margin: 30px auto;
    border-radius: 42%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  img {
    width: 150%;
    height: 150%;
  }

  input {
    display: none;
  }
`;
