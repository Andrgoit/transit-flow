import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-top: 44px;
  /* padding-left: 54px; */
  width: 317px;
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

export const StyledInput = styled.input`
  background-color: transparent;
  color: #999;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* font-family: League Spartan; */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  border: 1px solid #4e5683;
  padding-top: 21px;
  padding-bottom: 21px;
  padding-left: 30px;
  width: 100%;
`;

export const StyledButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 35px;
`;

export const StyledButton = styled.button`
  color: #23212a;
  /* font-family: Krub; */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 135.023%;
  padding: 19px 36px;
  border: none;
  background: linear-gradient(127deg, #ffb629 0%, #ffda56 50.72%, #ffd7a6 100%);

  cursor: pointer;
`;
// ---------- Icons

export const StyledIconContainer = styled.ul`
  display: flex;
  gap: 27px;
  align-items: center;
`;

export const StyledSocialItem = styled.li``;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 250%;
`;

export const StyledIcon = styled.span`
  width: 20px;
  display: block;
  fill: white;

  &:hover {
    fill: #f5841b;
  }
`;
