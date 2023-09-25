import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Rating from '../Rating/Rating';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import quote from '../../../img/HomePage/Testimonial/quote.svg';

export default function SwiperContent({ users }) {
  const elements = users.map(({ name, role, img, raiting, text }) => (
    <SwiperSlide
      key={name}
      className=" py-[62px] px-[72px] w-[550px] h-[425px] bg-[#f4f4f4] odd:bg-[#c2bfbf]"
    >
      <div className="">
        <div className="flex justify-between mb-6">
          <div className="flex items-center gap-[10px]">
            <div
              className=" w-[91px] h-[91px] rounded-full"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div>
              <p className=" font-rubik font-medium text-heading-color text-xl">
                {name}
              </p>
              <p className=" font-krab font-medium text-base text-heading-color">
                {role}
              </p>
            </div>
          </div>
          <div
            className=" w-[73px] h-[73px]"
            style={{ backgroundImage: `url(${quote})` }}
          />
        </div>
        <p className=" font-krab font-medium text-base text-paragraph-color ">
          {text}
        </p>
        <Rating count={raiting} />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="flex justify-center">
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {elements}
      </Swiper>
    </div>
  );
}
