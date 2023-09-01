import styled from 'styled-components';
import bg from '../../../img/HomePage/Choose/banner.jpg';
import icon from '../../../img/HomePage/Choose/icon.svg';

export const StyledContainer = styled.div`
  width: 100%;
  height: 897px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
`;

export const StyledImageSide = styled.div`
  height: 100%;
  width: 50%;
  background-color: #091242;
`;

export const StyledImageContainer = styled.div`
  width: 929px;
  height: 610px;
  margin-top: 142px;
  margin-left: 140px;
  background-image: url(${bg});
  position: relative;
`;

export const StyledLabel = styled.div`
  width: 417px;
  position: absolute;
  left: 220px;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 21px;
  padding: 30px 33px 30px 33px;
  background: linear-gradient(
    94deg,
    #ffb629 -1.21%,
    #ffda56 58.66%,
    #ffd7a6 116.84%
  );
`;

export const StyledLabelIcon = styled.div`
  width: 65px;
  height: 80px;
  background-image: url(${icon});
`;

export const StyledLabelText = styled.p`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 259px;
`;

export const StyledContentSide = styled.div`
  height: 100%;
  width: 50%;
  padding-top: 200px;
  padding-left: 192px;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 553px;
`;

export const StyledContentTitile = styled.h3`
  width: 438px;
  margin-top: 12px;
  margin-bottom: 18px;
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledContentText = styled.p`
  width: 486px;
  margin-bottom: 61px;
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  gap: 72px;
`;

export const StyledIconsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledIconsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledIcon = styled.div`
  width: 63px;
  height: 63px;
  background-image: url(${props => props.bg});
`;

export const StyledIconText = styled.p`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
