import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  width: 1230px;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const StyledTitle = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 29px;
`;

export const StyledItem = styled.li`
  width: 380px;
  padding: 61px 50px;
  background-color: #f4f4f4;
  color: #1c1f35;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1f2a69;
    color: #fff;

    & a {
      color: #1f2a69;
      background: linear-gradient(
        127deg,
        rgb(255, 182, 41) 0%,
        rgb(255, 218, 86) 50.72%,
        rgb(255, 215, 166) 100%
      );

      &::after {
        background-color: #fff;
      }
    }
  }
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const StyledItemTitle = styled.h4`
  font-family: Rubik;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledPrice = styled.span`
  font-family: Rubik;
  font-size: 85px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledMonth = styled.p`
  font-family: Rubik;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledLists = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledListsItem = styled.li`
  padding-top: 17px;
  padding-bottom: 17px;
  text-align: center;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledButton = styled(Link)`
  width: 194px;
  padding: 19px 48px;
  margin-top: 39px;
  text-decoration: none;

  color: #fff;
  background: rgba(9, 18, 66, 1);

  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;

  border: 1px solid rgba(9, 18, 66, 1);
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    background-color: #1f2a69;
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
