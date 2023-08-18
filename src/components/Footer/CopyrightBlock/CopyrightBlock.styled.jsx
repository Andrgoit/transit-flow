import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div``;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const StyledItem = styled.li``;

export const StyledLink = styled(Link)`
  color: #8388a7;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 250%;
  text-decoration: none;
`;
