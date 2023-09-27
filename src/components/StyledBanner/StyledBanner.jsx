export default function Banner({ children, img }) {
  return (
    <div className=" relative z-[-1]">
      <div
        className=" bg-gradient-to-r from-[#032d5f] from 18.18% to-[rgba(9, 18, 66, 0.2)] to 64.92% relative  w-full h-[497px]  mt-[-78px]"
        // style={{ backgroundImage: `url(${banner})` }}
      >
        <img
          src={img}
          alt="banner"
          className="mix-blend-overlay object-cover  w-full h-full absolute z-[-2]"
        />
        <div className=" container mx-auto w-[1230px] px-[15px] ">
          <div className="w-[746px]  pt-[251px] pb-[127px] flex-col flex">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
