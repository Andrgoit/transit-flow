import { NavLink } from 'react-router-dom';
import SelectPage from '../SelectPage/SelectPage';

export default function Nav() {
  return (
    <ul className="list-none flex justify-center items-center gap-[30px]">
      <li>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/about">
          About
        </NavLink>
      </li>
      <SelectPage />
      <li>
        <NavLink className="navLink" to="/project">
          Project
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
