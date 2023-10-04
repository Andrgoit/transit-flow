import { Link } from 'react-router-dom';

import icon from '../../img/icons/showMore.svg';

export default function GalleryList({ items }) {
  const elements = items.map(({ id, href, img }) => (
    <li key={id}>
      <div
        className="w-[380px] h-[346px] flex justify-center items-center [&:hover>a]:opacity-100"
        style={{ backgroundImage: `url(${img})` }}
      >
        <Link
          to={href}
          className="w-[322px] h-[292px] bg-[#1c1f35e8]/90 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out"
        >
          <div
            className="w-[30px] h-[30px]"
            style={{ background: `url(${icon})` }}
          />
        </Link>
      </div>
    </li>
  ));
  return <ul className="flex gap-[30px] flex-wrap">{elements}</ul>;
}
