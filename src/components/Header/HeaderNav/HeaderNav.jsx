import {
  StyledHeaderNavContainer,
  StyledContainer,
  StyledSosialsContainer,
} from "./HeaderNav.styled";
import Nav from "../Nav/Nav";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../Button/Button";

export default function HeaderNav() {
  return (
    <StyledHeaderNavContainer>
      <StyledContainer>
        <Nav />
        <StyledSosialsContainer>
          <SocialLinks />
          <Button />
        </StyledSosialsContainer>
      </StyledContainer>
    </StyledHeaderNavContainer>
  );
}
