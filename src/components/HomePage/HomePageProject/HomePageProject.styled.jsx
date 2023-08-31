import styled from 'styled-components';

export const StyledContainer = styled.div``;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -250px;
`;

export const StyledContentTitle = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 35px;
`;

export const StyledBGContainer = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(
    95deg,
    #ffb629 -1.19%,
    #ffda56 57.78%,
    #ffd7a6 115.08%
  );
`;

export const StyledButton = styled.button`
  width: 194px;

  color: #fff;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;

  padding: 19px 48px;
  margin-top: 24px;
  border: 1px solid rgba(9, 18, 66, 1);
  overflow: hidden;
  position: relative;
  cursor: pointer;

  background: rgba(9, 18, 66, 1);

  &::after {
    content: '';
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 25px;
    right: -25px;
    transform: scale(1);
    transition: all 0.5s;
  }

  &:hover::after {
    transform: scale(1.5);
  }
`;
