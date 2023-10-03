import Label from '../../../../components/Label/Label';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import ClientLogo from '../../../../components/ClientLogo/ClientLogo';
import clientLogoData from '../../../../data/clientLogoData';

import mail from '../../../../img/HomePage/Contact/mail.svg';
import phone from '../../../../img/HomePage/Contact/phone.svg';
import time from '../../../../img/HomePage/Contact/time.svg';

const items = [
  { id: 1, label: 'Email contact@logistics.com', icon: mail },
  { id: 2, label: 'Call Us (00) 112 365 489', icon: phone },
  { id: 3, label: 'Mon - Sat 9.00 - 18.00 Sunday Closed', icon: time },
];

export default function Contact() {
  const elements = items.map(({ id, label, icon }) => (
    <li key={id} className=" flex justify-start items-center gap-[14px]">
      <div
        className="w-[63px] h-[63px]"
        style={{ backgroundImage: `url(${icon})` }}
      />
      <p className=" font-krab font-medium text-sm text-white">{label}</p>
    </li>
  ));

  return (
    <section className=" bg-primary-blue py-[143px]">
      <div className="containerStyled flex flex-col gap-[70px]">
        <div className=" flex justify-between">
          <div className=" w-[353px] flex flex-col gap-8">
            <div>
              <Label text="Contact" dark />
              <h3 className=" font-rubik font-semibold text-4xl text-white mt-3 mb-1">
                Get in touch with us
              </h3>
              <p className=" font-krab font-medium text-base text-white">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
            </div>
            <ul className=" flex flex-col gap-[30px]">{elements}</ul>
          </div>

          <SubscribeForm />
        </div>
        <ClientLogo items={clientLogoData} />
      </div>
    </section>
  );
}
