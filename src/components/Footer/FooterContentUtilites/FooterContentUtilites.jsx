import utilites from "./utilites";
import {
  StyledContainer,
  StyledContentTitle,
  StyledList,
  StyledItem,
  StyledLink,
} from "./FooterContentUtilites.styled";

export default function FooterContentUtilites() {
  const elements = utilites.map(({ label, href }) => (
    <StyledItem key={label}>
      <StyledLink to={href}>{label}</StyledLink>
    </StyledItem>
  ));
  return (
    <StyledContainer>
      <StyledContentTitle>Utilites</StyledContentTitle>
      <StyledList>{elements}</StyledList>
    </StyledContainer>
  );
}
