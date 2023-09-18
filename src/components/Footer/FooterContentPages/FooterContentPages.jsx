import { Link } from 'react-router-dom';
import pages from './pages';

export default function FooterContentPages() {
  const elements = pages.map(({ label, href }) => (
    <li key={label}>
      <Link className="navLink" to={href}>
        {label}
      </Link>
    </li>
  ));
  return (
    <div className="pt-[44px] pl-[54px] mr-[140px]">
      <h3 className="footerTitle">Pages</h3>
      <ul className="flex flex-col gap-[20px]">{elements}</ul>
    </div>
  );
}
