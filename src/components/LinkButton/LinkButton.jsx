import { Link } from 'react-router-dom';

export default function LinkButton({ to, children }) {
  return (
    <Link
      className="w-[194px] py-5 px-12 font-krab text-base text-white hover:text-primary-yelow transition-colors duration-200 ease-in-out font-semibold relative cursor-pointer bg-heading-color"
      style={{ border: '1px solid rgba(9, 18, 66, 1)' }}
      to={to}
    >
      {children}
    </Link>
  );
}
