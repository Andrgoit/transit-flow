import styled from 'styled-components';

import quote from '../../../../img/HomePage/Testimonial/quote.svg';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCardContainer = styled.div`
  padding: 62px 72px;
  background: #f4f4f4;
  width: 550px;
  height: 425px;

  &:nth-child(2n) {
    background: #d8d2d2;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const StyledUserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledUserImage = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 50%;

  background-image: url(${prop => prop.img});
`;

export const StyledUserHeaderText = styled.div``;

export const StyledUserName = styled.h3`
  color: #091242;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledUserRole = styled.p`
  color: #091242;
  font-family: Krub;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%;
`;

export const StyledQuote = styled.div`
  width: 73px;
  height: 73px;
  background-image: url(${quote});
`;

export const StyledUserText = styled.p`
  color: #666c89;
  font-family: Krub;
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  line-height: 151.523%;
  margin-bottom: 32px;
`;
