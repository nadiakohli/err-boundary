import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 55%;
  width: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-color: #ffe6e6;

  & p {
    font-size: 16px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  & label {
    font-size: 21px;
    padding: 0 10px;
  }

  & input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #cc0000;
    width: 150px;
    height: 25px;

    &::placeholder {
      font-family: 'Arima-Variable', sans-serif;
      color: #000;
      opacity: 50%;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: 5px;
  border-radius: 5px;
  width: 100px;
  height: 25px;
  border: 1px solid #cc0000;
  background-color: #ffb3b3;
  font-family: 'Arima-Variable', sans-serif;
  color: #cc0000;
  font-weight: bold;
`;
