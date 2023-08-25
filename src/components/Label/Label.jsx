import {
  StyledContainer,
  StyledIndicator,
  StyledTextArea,
} from './Label.styled';

/* bg - "dark" or "light" */

export default function Label({ text, bg }) {
  return (
    <StyledContainer>
      <StyledIndicator />
      <StyledTextArea bg={bg}>{text}</StyledTextArea>
    </StyledContainer>
  );
}
