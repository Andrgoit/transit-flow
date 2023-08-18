import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-top: 44px;
  /* padding-left: 54px; */
  margin-right: 140px;
`;

export const StyledContentTitle = styled.h3`
  color: #fff;
  /* font-family: Rubik; */
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 74px;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: calc(200 / 5);
`;

export const StyledItem = styled.li``;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 250%;
`;
