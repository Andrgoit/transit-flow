import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as UpButton } from '../../img/icons/up.svg';

import FooterContentLogo from './FooterContentLogo/FooterContentLogo';
import FooterContentPages from './FooterContentPages/FooterContentPages';
import FooterContentUtilites from './FooterContentUtilites/FooterContentUtilites';
import FooterContentSubscribe from './FooterContentSubscribe/FooterContentSubscribe';
import CopyrightBlock from './CopyrightBlock/CopyrightBlock';

export default function Footer() {
  return (
    <footer className=" relative flex flex-col items-center bg-[#091242]">
      <ScrollToTop smooth component={<UpButton />} />
      <div className="w-full h-[118px] bg-[#ffffff14]" />
      <div className="w-full h-[372px] shadow-[0px_4px_4px_0px_#8388a7]" />
      <CopyrightBlock />

      <div className="absolute top-0 mx-auto flex">
        <FooterContentLogo />
        <FooterContentPages />
        <FooterContentUtilites />
        <FooterContentSubscribe />
      </div>
    </footer>
  );
}
