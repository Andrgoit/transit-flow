import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  background: #091242;

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
