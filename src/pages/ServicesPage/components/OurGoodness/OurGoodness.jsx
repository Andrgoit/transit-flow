import Label from '../../../../components/Label/Label';

import icon1 from '../../../../img/ServicesPage/box.svg';
import icon2 from '../../../../img/ServicesPage/sheild.svg';
import icon3 from '../../../../img/ServicesPage/environment.svg';
import bg from '../../../../img/ServicesPage/big.jpg';
import img from '../../../../img/ServicesPage/small.jpg';

const items = [
  {
    id: 1,
    title: 'Warehousing Services',
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking',
    icon: icon1,
  },
  {
    id: 2,
    title: 'Safety & Quality',
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking',
    icon: icon2,
  },
  {
    id: 3,
    title: 'Care for Environment',
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking',
    icon: icon3,
  },
];

export default function OurGoodness() {
  const elements = items.map(({ id, title, text, icon }) => (
    <li key={id} className="flex justify-start gap-[19px]">
      <div className="w-[49px]">
        <img src={icon} alt="icon" width="49px" />
      </div>
      <div className=" pt-3 w-[468px] flex flex-col gap-3">
        <h3 className=" font-rubik font-medium text-2xl text-heading-color">
          {title}
        </h3>
        <p className=" font-krab font-medium text-base text-paragraph-color">
          {text}
        </p>
      </div>
    </li>
  ));

  return (
    <section className=" py-[103px] bg-secondary-gray">
      <div className=" w-full px-[15px] flex flex-col items-center">
        <Label text="Our Goodness" />
        <h3 className=" font-rubik font-semibold text-4xl text-heading-color mt-[18px] mb-9">
          How We Works
        </h3>
        <div className="flex gap-[90px]">
          <div
            className="w-[726px] h-[486px] relative"
            style={{ background: `url(${bg})` }}
          >
            <div
              className="w-[349px] h-[333px] absolute right-[-30px] bottom-[-30px]"
              style={{
                borderLeft: ' 30px solid #f4f4f4',
                borderTop: ' 30px solid #f4f4f4',
                background: `url(${img})`,
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
          <ul className="w-[608px] flex flex-col gap-[55px]">{elements}</ul>
        </div>
      </div>
    </section>
  );
}
