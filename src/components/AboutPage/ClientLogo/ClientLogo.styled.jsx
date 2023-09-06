import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const StyledContentRow = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

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
