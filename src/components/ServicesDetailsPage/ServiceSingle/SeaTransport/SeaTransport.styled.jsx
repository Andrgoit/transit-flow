import styled from 'styled-components';
import banner from '../../../../img/ServicesDetailsPage/ship.jpg';

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledBanner = styled.div`
  width: 100%;
  height: 509px;
  background: url(${banner});
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 22px;
  margin-top: 40px;
  margin-bottom: 22px;
`;

export const StyledIcon = styled.div`
  width: 50px;
  height: 54px;
`;

export const StyledTitle = styled.h3`
  color: #1c1f35;
  text-align: center;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
