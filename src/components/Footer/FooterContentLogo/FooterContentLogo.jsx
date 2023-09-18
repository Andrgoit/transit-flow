import logo from '../../../img/icons/header/logo.svg';
import email from '../../../img/icons/header/email.svg';
import phone from '../../../img/icons/header/phone.svg';

export default function FooterContentLogo() {
  return (
    <div className="flex flex-col w-[427px] pt-[43px] pr-[63px] pl-[45px] bg-[#091242]">
      <div className="w-[210px] h-[36px]">
        <img src={logo} alt="" width="210px" height="36px" />
      </div>
      <p className=" font-krab text-base font-medium text-[#e8e8e8] mt-[77px]">
        Leverage agile frameworks to provide a robust synopsis for strategy
        collaborative thinking to further the overall value proposition.
      </p>
      <div className="flex flex-col gap-[30px] mt-[33px]">
        <div className="flex justify-start items-center gap-[17px]">
          <div className="w-[63px] h-[63px]">
            <img src={email} alt="email" />
          </div>
          <p className="font-krab text-white text-sm font-medium max-w-[176px]">
            Email contact@logistics.com
          </p>
        </div>

        <div className="flex justify-start items-center gap-[17px]">
          <div className="w-[63px] h-[63px]">
            <img src={phone} alt="phone" />
          </div>
          <p className="font-krab text-white text-sm font-medium max-w-[176px]">
            Call Us (00) 112 365 489
          </p>
        </div>
      </div>
    </div>
  );
}
