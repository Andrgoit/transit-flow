import Label from '../../../../components/Label/Label';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import ClientLogo from '../../../../components/ClientLogo/ClientLogo';
import clientLogoData from '../../../../data/clientLogoData';

export default function Contact({ items = [] }) {
  const elements = items.map(({ id, label, icon }) => (
    <li key={id} className=" flex flex-col max-w-[158px] items-center ">
      <div
        className="w-[63px] h-[63px]"
        style={{ backgroundImage: `url(${icon})` }}
      />
      <p className=" font-krab text-center font-medium text-sm text-white">
        {label}
      </p>
    </li>
  ));

  return (
    <section className=" bg-white py-[100px]">
      <div className="containerStyled flex justify-center mb-[50px]">
        <div className="flex flex-col items-center w-[954px] bg-primary-blue py-[100px] px-[98px]">
          <Label text="Contact" dark />
          <h3 className=" font-rubik font-semibold text-4xl text-white mt-3 mb-1">
            Get in touch with us
          </h3>
          <p className=" font-krab font-medium text-base text-white">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>

          <ul className="w-[681px] flex justify-between mt-10 mb-6 ">
            {elements}
          </ul>

          <SubscribeForm />
        </div>
      </div>
      <ClientLogo items={clientLogoData} />
    </section>
  );
}
