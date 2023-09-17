import oclock from '../../../img/icons/header/oclock.svg';
import email from '../../../img/icons/header/email.svg';
import phone from '../../../img/icons/header/phone.svg';

export default function Info() {
  return (
    <ul className="flex justify-center gap-[39px]">
      <li className="flex justify-center  gap-[17px] max-w-[256px]">
        <div className="block w-[63px] h-[63px]">
          <img src={oclock} alt="oclock" width="63px" />
        </div>
        <p className="">Mon - Sat 9.00 - 18.00 Sunday Closed</p>
      </li>

      <li className="flex justify-center  gap-[17px] max-w-[220px]">
        <div className="block w-[63px] h-[63px]">
          <img src={email} alt="email" />
        </div>
        <p className="max-w-[176px]">Email contact@logistics.com</p>
      </li>

      <li className="flex justify-center  gap-[17px] max-w-[184px]">
        <div className="block w-[63px] h-[63px]">
          <img src={phone} alt="phone" />
        </div>
        <p className="max-w-[176px]">Call Us (00) 112 365 489</p>
      </li>
    </ul>
  );
}
