import { Link } from 'react-router-dom';

import { ReactComponent as Facebook } from '../../../img/icons/header/facebook.svg';
import { ReactComponent as Twitter } from '../../../img/icons/header/twitter.svg';
import { ReactComponent as Linkedin } from '../../../img/icons/header/linkdin.svg';

export default function FooterContentSubscribe() {
  return (
    <div className="pt-[44px] w-[317px]">
      <h3 className="footerTitle">Subscribe</h3>
      <input
        className="bg-transparent text-[#999] text-xl outline-0 border-[1px] border-solid border-[#4e5683] py-[21px] pl-[30px]"
        type="text"
        placeholder="Enter text*"
      />
      <div className="flex gap-[35px] mt-[20px]">
        <button
          className=" cursor-pointer font-krab text-base text-[#23212a] hover:text-[#f5841b] transition-colors duration-300 font-semibold py-[19px] px-[36px] bg-gradient-to-br from-[#ffb629] from 0% via-[#ffda56] via 50.72% to-[#ffd7a6] to 100%"
          type="button"
        >
          Send Now
        </button>
        <ul className="flex gap-[27px] items-center">
          <li>
            <Link className="socialLinks" to="#">
              <Linkedin width="20px" />
            </Link>
          </li>

          <li>
            <Link className="socialLinks" to="#">
              <Twitter width="20px" />
            </Link>
          </li>

          <li>
            <Link className="socialLinks" to="#">
              <Facebook width="20px" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
