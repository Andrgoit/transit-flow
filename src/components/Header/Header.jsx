import HeaderInfo from './HeaderInfo/HeaderInfo';
import HeaderNav from './HeaderNav/HeaderNav';

export default function Header() {
  return (
    <header className="flex flex-col relative drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]">
      <HeaderInfo />
      <HeaderNav />
    </header>
  );
}
