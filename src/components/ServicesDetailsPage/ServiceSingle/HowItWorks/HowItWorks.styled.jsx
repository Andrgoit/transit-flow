import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
`;

export const StyledMovieContainer = styled.div`
  width: 645px;
  height: 376px;
  aspect-ratio: 16 / 9;

  & iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledTextContainer = styled.div`
  padding: 52px 0 52px 65px;
`;

export const StyledTitle = styled.h3`
  color: #1c1f35;
  font-family: Rubik;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 15px;
`;

export const StyledText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
