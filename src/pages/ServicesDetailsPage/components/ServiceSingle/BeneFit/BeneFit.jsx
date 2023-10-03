import bg from '../../../../../img/ServicesDetailsPage/car.jpg';
import arrow from '../../../../../img/icons/arrow.svg';

const items = [
  { id: 1, title: 'Clearance and compliance service', img: arrow },
  { id: 2, title: 'Saving Time to Deal with commodo iaculis', img: arrow },
  { id: 3, title: 'Automate your business elis tristique', img: arrow },
  { id: 4, title: 'Saving Time to Deal with commodo iaculis', img: arrow },
];

export default function BeneFit() {
  const elements = items.map(({ id, title, img }) => (
    <li
      className="flex gap-3 font-rubik items-center font-normal text-xl text-heading-color w-full"
      key={id}
    >
      <div className="w-[14px] h-[13px]">
        <img src={img} alt="arrow" />
      </div>
      {title}
    </li>
  ));
  return (
    <div className="flex gap-[72px] justify-between mb-[100px]">
      <div className="w-[442px]">
        <h3 className=" font-rubik font-semibold text-4xl text-heading-color mb-3">
          Benefit of Service
        </h3>
        <p className=" font-krab font-medium text-base text-paragraph-color mb-10">
          Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium
          doloremque laudantium, totam rem quae ab illo inventore veritatis.
        </p>
        <ul className="flex flex-col gap-6">{elements}</ul>
      </div>
      <div
        className="w-[686px] h-[376px]"
        style={{ background: ` url(${bg})` }}
      />
    </div>
  );
}
