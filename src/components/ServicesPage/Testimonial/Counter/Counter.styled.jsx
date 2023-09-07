import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledCounterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCounterItem = styled.li`
  padding: 46px 52px 51px 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-top: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;

  &:last-child {
    border-right: none;
  }
`;

export const StyledNumbers = styled.span`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledDecor = styled.span`
  display: block;
  width: 17px;
  height: 17px;
  background: linear-gradient(127deg, #ffb629 0%, #ffda56 50.72%, #ffd7a6 100%);
`;

export const StyledText = styled.p`
  color: #1c1f35;
  font-family: League Spartan;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
