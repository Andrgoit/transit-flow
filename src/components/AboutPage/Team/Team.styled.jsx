import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #fff;
  padding-top: 95px;
  padding-bottom: 101px;
  display: flex;
  justify-content: center;
`;

export const StyledContentContainer = styled.div`
  width: 1230px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitleSection = styled.h3`
  color: #1c1f35;

  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 16px;
  padding-bottom: 40px;
`;

export const StyledCardList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 54px;
`;

export const StyledCardItem = styled.li`
  width: 364px;
  height: 538px;
  display: flex;
  flex-direction: column;
`;

export const StyledImgContainer = styled.div`
  width: 100%;
  height: 426px;
  position: relative;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 42px;
  padding-bottom: 20px;
  padding-left: 34px;
  background-color: #1c1f35;
`;

export const StyledName = styled.p`
  color: #fff;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledPosition = styled.p`
  color: #fff;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
`;

export const StyledSocialSection = styled.div`
  position: absolute;
  right: 0;
  bottom: -31px;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 20px 17px;
  /* color: rgba(28, 31, 53, 1); */
  background: linear-gradient(
    94deg,
    #ffb629 -1.21%,
    #ffda56 58.66%,
    #ffd7a6 116.84%
  );
`;

export const StyledLink = styled(Link)`
  display: block;

  &:hover {
    color: red;
  }
`;
