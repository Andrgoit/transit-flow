import Label from '../../components/Label/Label';
import LinkButton from '../LinkButton/LinkButton';

export default function Pricing({ prices = [] }) {
  const elements = prices.map(({ name, price, lists = [], href }) => (
    <li
      className=" w-[380px] py-[61px] px-[50px] bg-white text-heading-color flex flex-col items-center gap-[50px] cursor-pointer hover:bg-[#1f2a69] hover:text-white transition-colors duration-200"
      key={name}
    >
      <div className="flex flex-col items-center gap-9">
        <h4 className=" font-rubik font-medium text-3xl">{name}</h4>
        <p className=" font-rubik font-normal text-2xl">
          <span className=" font-rubik font-medium text-[85px]">${price}</span>
          /month
        </p>
      </div>
      <ul className=" flex flex-col">
        {lists.map(list => (
          <li
            className=" py-4 text-center font-rubik font-normal text-xl"
            key={list}
          >
            {list}
          </li>
        ))}
      </ul>
      <LinkButton yelow to={href}>
        Choose Plan
      </LinkButton>
    </li>
  ));
  return (
    <section className=" py-[100px] bg-white">
      <div className=" containerStyled flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <Label text="Pricing" />
          <h2 className=" font-rubik font-semibold text-4xl text-heading-color">
            Our Best Pricing
          </h2>
        </div>
        <ul className="flex flex-row gap-7">{elements}</ul>
      </div>
    </section>
  );
}
