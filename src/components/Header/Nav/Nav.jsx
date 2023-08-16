import { StyledContainer, SyledLink } from "./Nav.styled";
import SelectPage from "../SelectPage/SelectPage";

export default function Nav() {
  return (
    <StyledContainer>
      <SyledLink to="#">Home</SyledLink>
      <SyledLink to="#">About</SyledLink>
      <SelectPage />
      <SyledLink to="#">Project</SyledLink>
      <SyledLink to="#">Contact</SyledLink>
    </StyledContainer>
  );
}
