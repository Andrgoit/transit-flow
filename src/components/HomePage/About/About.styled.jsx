import styled from 'styled-components';
import banner from '../../../img/HomePage/Banner/banner.jpg';

export const HomePageAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 97px;
`;

export const StyledBanner = styled.div`
  width: 100%;
  height: 504px;
  background-image: linear-gradient(0deg, #091242 0%, rgba(9, 18, 66, 0) 100%),
    url(${banner});
`;

export const StyledContentWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  height: 521px;
`;

export const StyledCounterWrapper = styled.div`
  background-color: #fff;
`;
