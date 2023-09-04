import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: #fff;
  padding-top: 98px;
  padding-bottom: 98px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled.div`
  width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTtileSection = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  padding-top: 13px;
  padding-bottom: 39px;
`;

export const StyledEventsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledEventItem = styled.li`
  display: flex;
  padding-top: 29px;
  padding-bottom: 29px;
  border-bottom: 1px solid #d6d6d6;

  &:first-child {
    border-top: 1px solid #d6d6d6;
  }
`;

export const StyledImgContainer = styled.div`
  width: 453px;
  height: 308px;
  background-image: url(${({ bg }) => bg});

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover a {
    opacity: 1;
  }
`;

export const StyledImgLink = styled(Link)`
  padding: 100px 146px;
  background-color: rgba(28, 31, 53, 0.91);
  text-decoration: none;

  color: #fff;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;
  opacity: 0;
  transition: opacity 0.35s ease-in-out;
`;

export const StyledDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-right: 1px solid #d6d6d6;
`;

export const StyledIconContainer = styled.div`
  width: 51px;
  height: 56px;
`;

export const StyledDayText = styled.p`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledMonthText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
`;

export const StyledTextContainer = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-left: 29px;
`;

export const StyledTitle = styled(Link)`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;

  transition: color 0.25s ease-in-out;

  &:hover {
    color: #ffbe34;
  }
`;

export const StyledText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
`;

export const StyledTextListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: inside;
`;

export const StyledTextItem = styled.li`
  color: #1c1f35;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 166.523%;
  list-style: inside;
`;

export const StyledButton = styled(Link)`
  width: 194px;
  padding: 19px 48px;
  margin-top: 39px;
  text-decoration: none;

  color: #fff;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;

  border: 1px solid rgba(9, 18, 66, 1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: rgba(9, 18, 66, 1);

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
