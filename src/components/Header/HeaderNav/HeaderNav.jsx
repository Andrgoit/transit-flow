import Nav from '../Nav/Nav';
import SocialLinks from '../SocialLinks/SocialLinks';
import Button from '../Button/Button';

export default function HeaderNav() {
  return (
    <div className="bg-[#0912423f]/25">
      <div className="mx-auto max-w-[1230px] px-[15px] text-white flex justify-between items-center">
        <Nav />
        <div className="flex items-center gap-[50px]">
          <SocialLinks />
          <Button />
        </div>
      </div>
    </div>
  );
}
