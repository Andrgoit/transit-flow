import { Link } from 'react-router-dom';
import links from './links';

export default function CopyrightBlock() {
  const elements = links.map(({ label, href }) => (
    <li key={label}>
      <Link
        className="text-[#8388a7] text-base font-normal leading-9 font-krab "
        to={href}
      >
        {label}
      </Link>
    </li>
  ));

  return (
    <div className="w-[1230px] mx-auto pt-[15px] pb-[18px]">
      <ul className=" flex justify-center gap-[50px]">{elements}</ul>
    </div>
  );
}
