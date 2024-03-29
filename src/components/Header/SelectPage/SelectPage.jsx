import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pages } from './pages';
import { BiSolidChevronUp, BiSolidChevronDown } from 'react-icons/bi';

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

  const hoverHandler = () => {
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <>
      <span
        className="navLink relative flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={hoverHandler}
      >
        Pages{isOpen ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        {isOpen && (
          <div
            className="w-[130px] flex flex-col items-center gap-[15px] bg-[#e4e4e4] p-[15px] rounded-xl absolute top-[36px] left-[-30px] box-shadow-[0 2px 6px black] "
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {elements}
          </div>
        )}
      </span>
    </>
  );
}
