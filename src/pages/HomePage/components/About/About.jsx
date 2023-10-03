import banner from '../../../../img/HomePage/Banner/banner.jpg';

import Content from './Content/Content';
import Counter from '../../../../components/Counter/Counter';

import { homePageItems } from '../../../../data/counderData';

export default function About() {
  return (
    <section className=" pb-24 bg-white">
      <div
        className=" w-full h-[504px]"
        style={{
          background: ` linear-gradient(0deg, #091242 0%, rgba(9, 18, 66, 0) 100%),
    url(${banner})`,
        }}
      ></div>
      <div className="containerStyled flex flex-col items-center gap-40">
        <Content />
        <Counter items={homePageItems} />
      </div>
    </section>
  );
}
