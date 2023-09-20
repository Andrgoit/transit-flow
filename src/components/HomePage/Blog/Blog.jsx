import { StyledButton } from './Blog.styled';
import { Link } from 'react-router-dom';

import Label from '../../../components/Label/Label';

import bg1 from '../../../img/HomePage/Blog/bg1.jpg';
import bg2 from '../../../img/HomePage/Blog/bg2.jpg';
import bg3 from '../../../img/HomePage/Blog/bg3.jpg';

import calendar from '../../../img/HomePage/Blog/calendar.svg';

const events = [
  {
    title: 'Inland freight a worthy solution for your business',
    img: bg1,
    date: { day: '08', month: 'September' },
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    textList: ['Urgent transport solutions', 'Reliable & experienced staffs'],
    href: '/blog',
  },
  {
    title: 'How technology can help redraw the supply chain map',
    img: bg2,
    date: { day: '12', month: 'September' },
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    textList: ['Urgent transport solutions', 'Reliable & experienced staffs'],
    href: '/blog',
  },

  {
    title: 'Five things you should have ready for your broker',
    img: bg3,
    date: { day: '25', month: 'September' },
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    textList: ['Urgent transport solutions', 'Reliable & experienced staffs'],
    href: '/blog',
  },
];

export default function Blog() {
  const elements = events.map(
    ({ title, img, date: { day, month }, text, textList, href }) => (
      <li
        className="flex p-7 first:border-t-[1px] first:border-t-solid first:border-t-[#d6d6d6]"
        style={{ borderBottom: '1px solid #d6d6d6' }}
        key={title}
      >
        <div
          className="w-[453px] h-[308px] flex justify-center items-center [&:hover>a]:opacity-100"
          style={{ backgroundImage: `url(${img})` }}
        >
          <Link
            className=" text-white font-krab text-base font-semibold py-[100px] px-[146px] bg-[#1c1f35e8]/90 opacity-0 transition-opacity duration-300 ease-in-out"
            to={href}
          >
            Read More
          </Link>
        </div>
        <div className="flex flex-col items-center px-5 border-r-[1px] border-r-solid border-r-[#d6d6d6]">
          <div className="w-[51px] h-[56px]">
            <img src={calendar} alt="calendar" />
          </div>
          <p className=" text-4xl font-semibold font-rubik text-heading-color">
            {day}
          </p>
          <p className=" text-base font-krab font-medium text-paragraph-color">
            {month}
          </p>
        </div>
        <div className="w-[335px] flex flex-col gap-4 pl-7">
          <Link
            className=" font-rubik text-2xl font-normal text-heading-color transition-colors hover:text-primary-yelow duration-200 ease-in-out"
            to={href}
          >
            {title}
          </Link>
          <p className=" font-krab font-medium text-paragraph-color text-base">
            {text}
          </p>
          <ul className="flex flex-col pl-7 ">
            {textList.map(item => (
              <li
                className=" font-krab font-medium text-base list-disc text-paragraph-color"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </li>
    )
  );

  return (
    <section className=" py-24">
      <div className="containerStyled flex flex-col items-center">
        <Label text="Our Blog" />
        <h3 className=" font-rubik text-4xl font-semibold text-heading-color pt-3 pb-10">
          Our Latest News
        </h3>
        <ul className="flex flex-col ">{elements}</ul>
        <StyledButton to="/blog">More Blog</StyledButton>
      </div>
    </section>
  );
}
