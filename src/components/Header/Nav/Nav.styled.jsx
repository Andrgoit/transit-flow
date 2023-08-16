import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  gap: 30px;
`;

export const SyledLink = styled(NavLink)`
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;

  /* &.active {
    text-shadow: 2px 2px 6px #fff;
  } */
`;
