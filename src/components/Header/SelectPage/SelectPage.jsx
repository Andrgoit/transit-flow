import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pages } from './pages';

export default function SelectPage() {
  const [isOpen, setIsOpen] = useState(false);

  const elements = pages.map(({ label, href }) => (
    <li key={label} onClick={() => setIsOpen(false)}>
      <Link
        className="navLink text-black hover:border-b hover:border-solid hover:border-black"
        to={href}
      >
        {label}
      </Link>
    </li>
  ));

  return (
    <>
      <span
        className="navLink relative"
        onClick={() => setIsOpen(prev => !prev)}
      >
        Pages&#8895;
        {isOpen && (
          <div className="w-[130px] flex flex-col items-center gap-[15px] bg-[#e4e4e4] p-[15px] rounded-xl absolute top-[36px] left-[-30px] box-shadow-[0 2px 6px black] ">
            {elements}
          </div>
        )}
      </span>
    </>
  );
}
