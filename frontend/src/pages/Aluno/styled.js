import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 35px;
    font-size: 18;
    border: 1px solid #555;
    border-radius: 10px;
    padding: 0 10px;
    margin-top: 10px;
    margin-bottom: 10px;

    &:focus {
      border: 2px solid ${colors.primaryColor};
    }
  }

  button {
    margin-top: 10px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    border-radius: 50%;
  }
`;
