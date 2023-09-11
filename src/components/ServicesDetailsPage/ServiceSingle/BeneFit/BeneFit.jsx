import {
  StyledContainer,
  StyledTextContaiber,
  StyledImgContainer,
  StyledTitle,
  StyledText,
  StyledList,
  StyledItem,
} from './BeneFit.styled';

export default function BeneFit() {
  return (
    <StyledContainer>
      <StyledTextContaiber>
        <StyledTitle>Benefit of Service</StyledTitle>
        <StyledText>
          Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium
          doloremque laudantium, totam rem quae ab illo inventore veritatis.
        </StyledText>
        <StyledList>
          <StyledItem>Clearance and compliance service</StyledItem>
          <StyledItem>Saving Time to Deal with commodo iaculis</StyledItem>
          <StyledItem>Automate your business elis tristique</StyledItem>
          <StyledItem>Saving Time to Deal with commodo iaculis</StyledItem>
        </StyledList>
      </StyledTextContaiber>
      <StyledImgContainer />
    </StyledContainer>
  );
}
