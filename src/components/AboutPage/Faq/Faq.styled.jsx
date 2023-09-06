import styled from 'styled-components';

import bg from '../../../img/AboutPage/Faq/bg.jpg';
import icon from '../../../img/AboutPage/Faq/phone.svg';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f4f4f4;
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 197px;
  justify-content: flex-end;
`;
export const StyledTextSection = styled.div`
  width: 681px;
`;

export const StyledTitle = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 308px;
  margin-top: 15px;
  margin-bottom: 50px;
`;

export const StyledImgSection = styled.div`
  width: 682px;
  height: 539px;
  background: url(${bg});
  position: relative;
`;

export const StyledContentWrapper = styled.div`
  width: 448px;
  height: 368px;
  padding: 52px 62px;
  background-color: #091242;
  position: absolute;
  top: 86px;
  left: -126px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

export const StyledContentTitle = styled.p`
  color: #fff;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const StyledIcon = styled.div`
  width: 63px;
  height: 63px;
  background-image: url(${icon});
`;

export const StyledIconText = styled.p`
  width: 153px;
  color: #fff;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 135.023%;
`;
export const StyledButton = styled(Link)`
  width: 194px;
  color: #23212a;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;
  padding: 19px 48px;
  border: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  background: linear-gradient(
    rgba(255, 182, 41, 1),
    rgba(255, 218, 86, 1),
    rgba(255, 215, 166, 1)
  );

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
