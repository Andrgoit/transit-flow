import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../../img/AboutPage/About/big.jpg';
import image from '../../../img/AboutPage/About/small.jpg';

export const AboutContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;
//
export const StyledContainer = styled.div`
  display: flex;
  gap: 100px;
`;

export const StyledTextArea = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTitle = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
`;

export const StyledIconsArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 12px;
`;

export const StyledIconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledIcon = styled.div`
  width: 58px;
  height: 58px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const StyledIconTitle = styled.p`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledImgArea = styled.div`
  position: relative;
  width: 786px;
  height: 426px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledContentImage = styled.div`
  width: 264px;
  height: 258px;
  background-image: url(${image});
  border-top: 25px solid #fff;
  border-left: 25px solid #fff;
  position: absolute;
  bottom: -45px;
  right: -40px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const StyledButton = styled(Link)`
  width: 194px;
  padding: 16px 38px;
  text-decoration: none;

  font-family: Krub;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 151.523%;
  cursor: pointer;
  color: #1c1f35;
  background-color: #f4f4f4;

  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #ffb82b;
  }
`;
