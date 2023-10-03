import { Link } from 'react-router-dom';

export default function CardsList({ cards }) {
  const elements = cards.map(({ title, img, text, href }) => (
    <li
      className=" w-[320px] h-[408px]  transition-all ease-in-out duration-200 hover:scale-110 pb-5 cursor-pointer"
      key={title}
      style={{
        background: `linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%),
    url(${img})`,
      }}
    >
      {' '}
      <Link
        to={href}
        className=" h-full w-full flex flex-col justify-end gap-1 pl-[25px]"
      >
        <h3 className=" font-rubik font-medium text-xl text-white">{title}</h3>
        <p className=" font-krab font-medium text-base text-[#ffb629]">
          {text}
        </p>
      </Link>
    </li>
  ));
  return <ul className=" flex justify-center gap-[18px] mb-16">{elements}</ul>;
}
