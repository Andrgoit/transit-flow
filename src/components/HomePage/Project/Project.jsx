import {
  StyledContainer,
  StyledContentContainer,
  StyledContentTitle,
  StyledBGContainer,
  StyledButton,
} from './Project.styled';
import CardsList from './CardsList/CardsList';

export default function HomePageProject() {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <StyledContentTitle>Transporting Across The World</StyledContentTitle>
        <CardsList />
        <StyledButton type="button">More Work</StyledButton>
      </StyledContentContainer>
      <StyledBGContainer />
    </StyledContainer>
  );
}
