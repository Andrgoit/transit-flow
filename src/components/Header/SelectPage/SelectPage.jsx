import { pages } from "./pages";
import { StyledSelect, StyledOption, StyledLink } from "./SelectPage.styled";

export default function SelectPage() {
  const elements = pages.map(({ label, href }) => (
    <StyledOption key={label}>
      <StyledLink to={href}>{label}</StyledLink>
    </StyledOption>
  ));

  return <StyledSelect>{elements}</StyledSelect>;
}
