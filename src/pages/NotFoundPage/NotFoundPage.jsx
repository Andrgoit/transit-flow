import {
  StyledSection,
  StyledContainer,
  StyledBigLetter,
  StyledBigLetterAnotherColor,
  StyledBoldText,
  StyledText,
} from './NotFoundPage.styled';

import Banner from 'components/NotFoundPage/Banner/Banner';
import Button from 'components/NotFoundPage/Button/Buttom';

export default function NotFoundPage() {
  return (
    <>
      <Banner />
      <StyledSection>
        <StyledContainer>
          <StyledBigLetter>
            4<StyledBigLetterAnotherColor>0</StyledBigLetterAnotherColor>4
          </StyledBigLetter>
          <StyledBoldText>Oops! Page not found.</StyledBoldText>
          <StyledText>Let’s get you to where you need to be.</StyledText>
          <Button />
        </StyledContainer>
      </StyledSection>
    </>
  );
}
