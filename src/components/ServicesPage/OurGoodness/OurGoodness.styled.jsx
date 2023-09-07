import styled from 'styled-components';
import bg from '../../../img/ServicesPage/big.jpg';
import img from '../../../img/ServicesPage/small.jpg';

export const StyledSection = styled.section`
  padding-top: 103px;
  padding-bottom: 103px;
  background-color: #f4f4f4;

  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h3`
  color: #1c1f35;
  text-align: center;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-top: 18px;
  margin-bottom: 35px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 90px;
`;

export const StyledImgContainer = styled.div`
  width: 726px;
  height: 486px;
  background: url(${bg});

  position: relative;
`;

export const StyledImg = styled.div`
  width: 349px;
  height: 333px;
  border-left: 30px solid #f4f4f4;
  border-top: 30px solid #f4f4f4;
  position: absolute;
  right: -30px;
  bottom: -30px;
  background: url(${img});
`;

export const StyledList = styled.ul`
  width: 608px;
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 19px;
`;

export const StyledIcon = styled.div`
  width: 50px;
`;

export const StyledtextWrapper = styled.div`
  padding-top: 12px;
  width: 468px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledIconTitile = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SrtledIconText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
  padding: 0;
  margin: 0;
`;
