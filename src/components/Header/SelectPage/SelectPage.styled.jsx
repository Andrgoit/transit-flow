import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSelect = styled.select`
  background-color: transparent;
  border: none;
  outline: none;

  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;
`;

export const StyledOption = styled.option`
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;
  outline: none;
  border-radius: 5px;
`;

export const StyledLink = styled(Link)`
  /* color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%; */
`;
