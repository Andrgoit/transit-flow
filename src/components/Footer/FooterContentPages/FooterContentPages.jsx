import pages from "./pages";
import {
  StyledContainer,
  StyledContentTitle,
  StyledList,
  StyledItem,
  StyledLink,
} from "./FooterContentPages.styled";

export default function FooterContentPages() {
  const elements = pages.map(({ label, href }) => (
    <StyledItem key={label}>
      <StyledLink to={href}>{label}</StyledLink>
    </StyledItem>
  ));
  return (
    <StyledContainer>
      <StyledContentTitle>Pages</StyledContentTitle>
      <StyledList>{elements}</StyledList>
    </StyledContainer>
  );
}
