import { Link } from 'react-router-dom';

import Label from '../Label/Label';

export default function Team({ cards }) {
  const elements = cards.map(
    ({
      name,
      img,
      position,
      linkedin = null,
      twitter = null,
      facebook = null,
      instagram = null,
    }) => (
      <li className="w-[364px] h-[538px] flex flex-col" key={name}>
        <div className=" w-full h-[426px] relative">
          <img src={img} alt={name} />
          <div
            className=" absolute right-0 -bottom-8 flex items-center gap-6 py-5 px-4"
            style={{
              background:
                'linear-gradient(94deg,#ffb629 -1.21%,#ffda56 58.66%,#ffd7a6 116.84%)',
            }}
          >
            {linkedin ? (
              <Link
                className="text-heading-color transition-colors duration-200 hover:text-red-600"
                to={linkedin}
              >
                {linkedin}
              </Link>
            ) : null}
            {twitter ? (
              <Link
                className="text-heading-color transition-colors duration-200 hover:text-red-600"
                to={twitter}
              >
                {twitter}
              </Link>
            ) : null}
            {facebook ? (
              <Link
                className="text-heading-color transition-colors duration-200 hover:text-red-600"
                to={facebook}
              >
                {facebook}
              </Link>
            ) : null}
            {instagram ? (
              <Link
                className="text-heading-color transition-colors duration-200 hover:text-red-600"
                to={instagram}
              >
                {instagram}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-start pt-10 pb-5 pl-8 bg-heading-color">
          <p className=" font-rubik font-medium text-xl text-white">{name}</p>
          <p className=" font-krab font-medium text-base text-white">
            {position}
          </p>
        </div>
      </li>
    )
  );

  return (
    <section className=" py-24 bg-[#F4F4F4]">
      <div className="containerStyled flex flex-col items-center">
        <Label text="The Transporters" />
        <h3 className=" font-rubik text-4xl font-semibold mt-4 mb-10">
          Meet Expert Team
        </h3>
        <ul className="flex flex-wrap justify-center gap-[54px]">{elements}</ul>
      </div>
    </section>
  );
}
