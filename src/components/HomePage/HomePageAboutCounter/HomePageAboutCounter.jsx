import {
  StyledContainer,
  StyledLeftSection,
  StyledRightSection,
  StyledNumbers,
  StyledDecor,
  StyledText,
} from './HomePageAboutCounter.styled';

export default function HomePageAboutCounter() {
  return (
    <StyledContainer>
      <StyledLeftSection>
        <StyledNumbers>1294</StyledNumbers>
        <StyledDecor />
        <StyledText>Delivered Packages</StyledText>
      </StyledLeftSection>
      <StyledRightSection>
        <StyledNumbers>3594</StyledNumbers>
        <StyledDecor />
        <StyledText>Satisfied Clients</StyledText>
      </StyledRightSection>
    </StyledContainer>
  );
}
