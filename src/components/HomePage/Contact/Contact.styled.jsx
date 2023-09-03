import styled from 'styled-components';

export const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: #091242;
  padding-top: 143px;
  padding-bottom: 143px;
`;

export const StyledContainer = styled.div`
  width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const StyledContentRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTextContent = styled.div`
  width: 353px;
`;

export const StyledIconListColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledIconItem = styled.div`
  display: flex;
  gap: 14px;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledIconWrapper = styled.div`
  width: 63px;
  height: 63px;
  background: url(${({ bg }) => bg});
`;

export const StyledIconText = styled.p`
  color: #fff;
  font-family: Krub;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 135.023%;
`;

export const StyledTitle = styled.h3`
  color: #fff;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 13px;
  margin-bottom: 3px;
`;

export const StyledText = styled.p`
  color: #fff;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
  margin-bottom: 32px;
`;

export const StyledFormContent = styled.div``;

export const StyledImgContent = styled.div`
  width: calc(100% / 4);
  height: 234px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 93px;
  padding-bottom: 93px;
  background: linear-gradient(0deg, #111c54 0%, rgba(17, 28, 84, 0) 98.72%),
    url(${({ bg }) => bg}) lightgray 50% / cover no-repeat;
`;

export const StyledIcon = styled.div`
  /* width: ${({ width }) => width};
  height: ${({ height }) => height}; */
`;
