import { StyledContainer, SyledLink } from './Nav.styled';
import SelectPage from '../SelectPage/SelectPage';

export default function Nav() {
  return (
    <StyledContainer>
      <SyledLink to="/">Home</SyledLink>
      <SyledLink to="/about">About</SyledLink>
      <SelectPage />
      <SyledLink to="/project">Project</SyledLink>
      <SyledLink to="/contact">Contact</SyledLink>
    </StyledContainer>
  );
}
