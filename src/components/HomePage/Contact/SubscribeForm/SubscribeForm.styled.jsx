import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 758px;
  padding-top: 42px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

export const StyledInputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;
`;

export const StyledInput = styled.input`
  width: 365px;
  padding-top: 21px;
  padding-bottom: 21px;
  padding-left: 30px;
  outline: none;

  color: #fff;
  font-family: League Spartan;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background-color: transparent;

  border: 1px solid #4e5683;

  &::placeholder {
    color: #fff;
    font-family: League Spartan;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding-top: 21px;
  padding-left: 24px;
  background-color: transparent;
  border: 1px solid #4e5683;
  resize: none;

  color: #fff;
  font-family: League Spartan;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #fff;
    font-family: League Spartan;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  padding: 19px 34px;
  color: #23212a;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;
  background: linear-gradient(
    94deg,
    #ffb629 -1.21%,
    #ffda56 58.66%,
    #ffd7a6 116.84%
  );
  cursor: pointer;
`;
