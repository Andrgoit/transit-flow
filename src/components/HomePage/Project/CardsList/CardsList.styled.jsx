import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 65px;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  padding-left: 25px;
  padding-bottom: 20px;
  width: 320px;
  height: 408px;
  background: linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%),
    url(${props => props.bg});

  transform: scale(1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledTitle = styled.h3`
  color: #fff;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledText = styled.p`
  color: #ffb629;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
`;
