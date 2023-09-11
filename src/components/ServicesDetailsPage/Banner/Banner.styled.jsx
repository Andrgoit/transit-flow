import styled from 'styled-components';
import banner from '../../../img/ServicesDetailsPage/banner.jpg';

export const StyledBanner = styled.div`
  background: linear-gradient(
      91deg,
      #032d5f 18.18%,
      rgba(9, 18, 66, 0.2) 64.92%
    ),
    url(${banner});
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  margin-top: -78px;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 497px;
  padding-top: 251px;
  padding-bottom: 127px;
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const StyledContainer = styled.div`
  width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  width: 571px;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  color: #fff;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 8px;
`;

export const StyledText = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
  margin-top: 6px;
`;

export const StyledButton = styled.button`
  width: 194px;
  color: #23212a;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;
  padding: 19px 48px;
  margin-top: 24px;
  border: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;

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
