import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import {
  StyledWrapper,
  StyledCardContainer,
  StyledHeader,
  StyledUserHeader,
  StyledUserImage,
  StyledUserName,
  StyledUserRole,
  StyledQuote,
  StyledUserText,
  StyledUserHeaderText,
} from './SwiperContent.styled';

import user1 from '../../../../img/HomePage/Testimonial/user1.jpg';
import user2 from '../../../../img/HomePage/Testimonial/user2.jpg';
import Rating from '../Rating/Rating';

const users = [
  {
    name: 'Sergey Filatov',
    role: 'Frontend Developer',
    img: user2,
    raiting: 5,
    text: 'Ja bi lu4we sdelal etot website',
  },
  {
    name: 'Kathleen Smith',
    role: 'Fuel Company',
    img: user1,
    raiting: 5,
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  },
  {
    name: 'Repeta Aleksander',
    role: 'CEO',
    img: user1,
    raiting: 5,
    text: 'Very good!!!',
  },

  {
    name: 'John Martin',
    role: 'Restoration Company',
    img: user2,
    raiting: 5,
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  },
];

export default function SwiperContent() {
  const elements = users.map(({ name, role, img, raiting, text }) => (
    <SwiperSlide key={name}>
      <StyledCardContainer>
        <StyledHeader>
          <StyledUserHeader>
            <StyledUserImage img={img} />
            <StyledUserHeaderText>
              <StyledUserName>{name}</StyledUserName>
              <StyledUserRole>{role}</StyledUserRole>
            </StyledUserHeaderText>
          </StyledUserHeader>
          <StyledQuote />
        </StyledHeader>
        <StyledUserText>{text}</StyledUserText>
        <Rating count={raiting} />
      </StyledCardContainer>
    </SwiperSlide>
  ));

  return (
    <StyledWrapper>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        // effect={'coverflow'}
        // grabCursor={true}
        // centeredSlides={true} //центрирует
        loop={true}
        // slidesPerView={'auto'}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 2.5,
        // }}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {elements}
      </Swiper>
    </StyledWrapper>
  );
}
