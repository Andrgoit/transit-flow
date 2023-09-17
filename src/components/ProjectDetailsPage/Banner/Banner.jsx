import Label from 'components/Label/Label';
import banner from 'img/ProjectDetailsPage/banner.jpg';

export default function Banner() {
  return (
    <div className=" relative z-[-1]">
      <div
        className=" bg-gradient-to-r from-[#032d5f] from 18.18% to-[rgba(9, 18, 66, 0.2)] to 64.92% relative  w-full h-[497px]  mt-[-78px]"
        // style={{ backgroundImage: `url(${banner})` }}
      >
        <img
          src={banner}
          alt="banner"
          className="mix-blend-overlay object-cover  w-full h-full absolute z-[-2]"
        />
        <div className=" container mx-auto w-[1230px] px-[15px] ">
          <div className="w-[746px]  pt-[251px] pb-[127px] flex-col flex">
            <Label text="Warehouse Transportation" dark />
            {/* для светлого типа Label нужно убрать атрибут dark */}
            <h2 className="text-6xl text-white font-bold mt-2">
              Air Cargo Transportation
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
