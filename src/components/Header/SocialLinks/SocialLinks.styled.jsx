import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSocialList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledSocialItem = styled.li``;

export const StyledLink = styled(Link)``;

export const StyledIcon = styled.span`
  width: 19px;
  display: block;
  fill: white;

  &:hover {
    fill: #f5841b;
  }
`;
export const StyledImg = styled.img`
  display: block;
  margin: 0;
  padding: 0;
`;
