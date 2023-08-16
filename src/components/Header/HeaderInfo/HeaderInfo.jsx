import Logo from "../Logo/Logo";
import Info from "../Info/Info";
import { InfoContainer, StyledContainer } from "./HeaderInfo.styled";

export default function HeaderInfo() {
  return (
    <InfoContainer>
      <StyledContainer>
        <Logo />
        <Info />
      </StyledContainer>
    </InfoContainer>
  );
}
