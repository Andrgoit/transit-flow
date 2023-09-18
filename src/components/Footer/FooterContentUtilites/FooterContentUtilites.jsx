import { Link } from 'react-router-dom';
import utilites from './utilites';

export default function FooterContentUtilites() {
  const elements = utilites.map(({ label, href }) => (
    <li key={label}>
      <Link className="navLink" to={href}>
        {label}
      </Link>
    </li>
  ));
  return (
    <div className="pt-[44px]  mr-[140px]">
      <h3 className="footerTitle">Utilites</h3>
      <ul className="flex flex-col gap-[20px]">{elements}</ul>
    </div>
  );
}
