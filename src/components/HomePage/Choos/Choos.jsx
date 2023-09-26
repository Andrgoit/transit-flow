import Label from '../../../components/Label/Label';

import bg from '../../../img/HomePage/Choose/banner.jpg';
import icon from '../../../img/HomePage/Choose/icon.svg';

export default function Choos({ chooses }) {
  const elements = chooses.map(({ id, label, img }) => (
    <li className="min-w-[223px] flex items-center gap-3" key={id}>
      <div
        className="w-[63px] h-[63px]"
        style={{ backgroundImage: `url(${img})` }}
      />
      <p className=" font-rubik font-normal text-xl text-heading-color">
        {label}
      </p>
    </li>
  ));

  return (
    <section className=" w-full h-[897px] bg-section-bg flex justify-center">
      <div className=" h-full w-1/2 bg-primary-blue relative">
        <div
          className="max-w-[929px] h-[610px] relative right-[-109px] bottom-[-142px] flex justify-center"
          style={{ backgroundImage: ` url(${bg})`, backgroundSize: 'cover' }}
        >
          <div
            className=" w-[417px] absolute bottom-0 flex items-center gap-5 py-[30px] px-[33px]"
            style={{
              background:
                'linear-gradient(94deg,#ffb629 -1.21%,#ffda56 58.66%,#ffd7a6 116.84%)',
            }}
          >
            <div
              className=" w-[65px] h-[88px] "
              style={{
                backgroundImage: `url(${icon})`,
                backgroundRepeat: 'no-repeat',
              }}
            />
            <p className=" font-rubik font-normal text-2xl w-[259px]">
              Moving your products across borders
            </p>
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-full flex flex-col justify-center pl-[192px]">
        <>
          <Label text="Why Choose" />
          <h3 className=" font-rubik font-semibold text-4xl text-heading-color w-[438px] mt-3 mb-4">
            We create opportunity to reach potential
          </h3>
          <p className=" font-krab font-medium text-base text-paragraph-color w-[486px] mb-[61px]">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.{' '}
          </p>

          <ul className=" flex flex-wrap gap-[72px] gap-y-5">{elements}</ul>
        </>
      </div>
    </section>
  );
}
