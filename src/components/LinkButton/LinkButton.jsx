import { Link } from 'react-router-dom';

export default function LinkButton({ to, children, yelow = false }) {
  return (
    <Link
      className={`w-[194px] py-5 px-12 font-krab text-center text-base font-semibold ${
        yelow
          ? 'bg-gradient-to-br from-[#ffb629] from 0% via-[#ffda56] via 50.72% to-[#ffd7a6] to 100%'
          : 'bg-heading-color'
      } ${
        yelow ? 'text-[#23212a]' : 'text-white'
      }   hover:text-primary-yelow transition-colors duration-200 ease-in-out  relative cursor-pointer `}
      // style={{ border: '1px solid rgba(9, 18, 66, 1)' }}
      to={to}
    >
      {children}
    </Link>
  );
}
