import links from "./links";
import { StyledList, StyledItem, StyledLink } from "./CopyrightBlock.styled";

export default function CopyrightBlock() {
  const elements = links.map(({ label, href }) => (
    <StyledItem key={label}>
      <StyledLink to={href}>{label}</StyledLink>
    </StyledItem>
  ));

  return <StyledList>{elements}</StyledList>;
}
