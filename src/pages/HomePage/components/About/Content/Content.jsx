import box from '../../../../../img/icons/box_round.png';
import money from '../../../../../img/icons/money_round.png';
import bg from '../../../../../img/HomePage/About/airplane.jpg';
import image from '../../../../../img/HomePage/About/girl.jpg';

import Label from '../../../../../components/Label/Label';

export default function Content() {
  return (
    <div className=" mt-[-138px] w-full pt-[85px] px-[86px]  bg-white flex justify-between">
      <div className=" flex flex-col items-start w-[472px]">
        <Label text="Why Us" />
        <h3 className=" font-rubik font-semibold text-4xl text-heading-color my-3">
          We provide full range global logistics solution
        </h3>
        <div className=" flex flex-col gap-8">
          <p className=" font-krab font-semibold text-base text-paragraph-color">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <p className=" font-krab font-semibold text-base text-paragraph-color">
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </div>
        <div className=" flex flex-col gap-3 mt-6">
          <div className="flex items-center gap-4">
            <div className=" w-[58px] h-[58px]">
              <img src={box} alt="" width="58px" />
            </div>
            <p className=" font-rubik font-normal text-2xl text-heading-color">
              Delivery on Time
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className=" w-[58px] h-[58px]">
              <img src={money} alt="" width="58px" />
            </div>
            <p className=" font-rubik font-normal text-2xl text-heading-color">
              Optimized Travel Cost
            </p>
          </div>
        </div>
      </div>
      <div
        className=" relative w-[461px] h-[415px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className=" w-[302px] h-[225px] absolute bottom-[-47px] left-[-104px]"
          style={{
            backgroundImage: `url(${image})`,
            borderTop: '30px solid #fff',
            borderRight: '30px solid #fff',
          }}
        />
      </div>
    </div>
  );
}
