import Label from '../../../../components/Label/Label';

import bg from '../../../../img/TeamPage/big.jpg';
import image from '../../../../img/TeamPage/small.jpg';

import icon1 from '../../../../img/icons/TeamPage/men.svg';
import icon2 from '../../../../img/icons/TeamPage/clock.svg';

const items = [
  {
    id: 1,
    title: 'Our Vission',
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster.',
    icon: icon1,
  },
  {
    id: 2,
    title: 'Estimate Shipping',
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster.',
    icon: icon2,
  },
];

export default function About() {
  const elements = items.map(({ id, title, text, icon }) => (
    <li key={id} className="flex flex-col gap-3 w-[230px] last:w-[222px]">
      <div
        className="h-[48px] max-w-[48px]"
        style={{
          background: `url(${icon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      ></div>
      <h4 className=" font-rubik font-medium text-2xl text-heading-color ">
        {title}
      </h4>
      <p className=" font-krab font-medium text-base text-paragraph-color">
        {text}
      </p>
    </li>
  ));
  return (
    <section className=" py-[100px] bg-white flex justify-center">
      <div className="flex gap-[100px]">
        <div
          className=" relative w-[726px] h-[486px]"
          style={{
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div
            className=" absolute w-[264px] h-[258px] -bottom-[45px] -right-[40px]"
            style={{
              background: `url(${image})`,
              borderTop: '25px solid #fff',
              borderLeft: '25px solid #fff ',
            }}
          />
        </div>

        <div className=" w-[560px] flex flex-col items-start">
          <Label text="About Us" />
          <h3 className=" font-rubik font-semibold text-4xl text-heading-color my-3">
            Why Choose Us
          </h3>

          <p className=" font-krab font-medium text-base text-paragraph-color mb-5">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="w-full h-[1px] bg-[#D6D6D6]"></div>
          <ul className=" w-full pt-[32px] pr-[25px] flex justify-between">
            {elements}
          </ul>
        </div>
      </div>
    </section>
  );
}
