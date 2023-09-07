import { HeaderContainer } from './Header.styled';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import HeaderNav from './HeaderNav/HeaderNav';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInfo />
      <HeaderNav />
    </HeaderContainer>
  );
}
