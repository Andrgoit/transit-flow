import styled from 'styled-components';
import bg from '../../../../img/HomePage/About/airplane.jpg';
import image from '../../../../img/HomePage/About/girl.jpg';

export const StyledContainer = styled.div`
  margin-top: -138px;
  width: 1230px;
  padding-top: 85px;
  padding-left: 86px;
  padding-right: 93px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const StyledTextArea = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTitle = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
`;

export const StyledIconsArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 12px;
`;

export const StyledIconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledIcon = styled.div`
  width: 58px;
  height: 58px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const StyledIconTitle = styled.p`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledImgArea = styled.div`
  position: relative;
  width: 461px;
  height: 415px;
  background-image: url(${bg});
`;

export const StyledContentImage = styled.div`
  width: 302px;
  height: 225px;
  background-image: url(${image});
  border-top: 30px solid #fff;
  border-right: 30px solid #fff;
  position: absolute;
  top: 273px;
  right: 263px;
`;
