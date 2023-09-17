import { Link } from 'react-router-dom';

import { ReactComponent as Inst } from '../../../img/icons/header/instagram.svg';
import { ReactComponent as Facebook } from '../../../img/icons/header/facebook.svg';
import { ReactComponent as Twitter } from '../../../img/icons/header/twitter.svg';
import { ReactComponent as Linkedin } from '../../../img/icons/header/linkdin.svg';

export default function SocialLinks() {
  return (
    <ul className=" list-none flex items-center gap-[24px]">
      <li>
        <Link className="w-[20px] h-[20px] socialLinks " to="#">
          <Inst className="" width="20px" />
        </Link>
      </li>

      <li>
        <Link className="w-[20px] h-[20px] socialLinks" to="#">
          <Facebook width="20px" />
        </Link>
      </li>

      <li>
        <Link className="w-[20px] h-[20px] socialLinks" to="#">
          <Twitter width="20px" />
        </Link>
      </li>

      <li>
        <Link className="w-[20px] h-[20px] socialLinks " to="#">
          <Linkedin width="20px" />
        </Link>
      </li>
    </ul>
  );
}
