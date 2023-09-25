import Logo from '../Logo/Logo';
import Info from '../Info/Info';

export default function HeaderInfo() {
  return (
    <div className="  bg-[#091242] py-[46px]">
      <div className="containerStyled  text-white flex justify-between items-center">
        <Logo />
        <Info />
      </div>
    </div>
  );
}
