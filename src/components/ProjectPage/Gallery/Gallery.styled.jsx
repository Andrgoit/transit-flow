import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../../../img/icons/showMore.svg';

export const StyledWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #fff;
`;

export const StyledContainer = styled.div`
  width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0px auto;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const StyledItem = styled.li``;

export const StyledImgContainer = styled.div`
  width: 380px;
  height: 346px;
  background-image: url(${({ bg }) => bg});

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover a {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  width: 322px;
  height: 292px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(28, 31, 53, 0.91);
  text-decoration: none;

  opacity: 0;
  transition: opacity 0.35s ease-in-out;
`;

export const StyledIcon = styled.div`
  width: 30px;
  height: 30px;
  background: url(${icon});
`;
