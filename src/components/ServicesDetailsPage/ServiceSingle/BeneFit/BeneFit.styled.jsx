import styled from 'styled-components';
import bg from '../../../../img/ServicesDetailsPage/car.jpg';
import arrow from '../../../../img/icons/arrow.svg';

export const StyledContainer = styled.div`
  display: flex;
  gap: 72px;
  justify-content: space-between;
`;
export const StyledTextContaiber = styled.div`
  width: 442px;
`;

export const StyledImgContainer = styled.div`
  width: 686px;
  height: 376px;
  background: url(${bg});
`;

export const StyledTitle = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 12px;
`;

export const StyledText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
  margin-bottom: 40px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StyledItem = styled.li`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::before {
    display: inline-block;
    content: '';
    width: 14px;
    height: 13px;
    margin-right: 12px;
    background: url(${arrow});
    background-size: cover;
  }
`;
