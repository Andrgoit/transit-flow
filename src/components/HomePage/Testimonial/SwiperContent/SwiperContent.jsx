import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    name: 'Bon',
    role: 'Restoration Company',
    img: user2,
    raiting: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum veritatis asperiores numquam animi ut pariatur molestiae. Earum, repellendus accusamus. Fugit tenetur id odit voluptas delectus doloribus excepturi, architecto sequi fuga ducimus ipsa est, possimus sed, itaque eveniet soluta earum cum?',
  },
  {
    name: 'Kathleen Smith',
    role: 'Fuel Company',
    img: user1,
    raiting: 5,
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  },
  {
    name: 'Aleksander',
    role: 'CEO',
    img: user1,
    raiting: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum veritatis asperiores numquam animi ut pariatur molestiae. Earum, repellendus accusamus. Fugit tenetur id odit voluptas delectus doloribus excepturi, architecto sequi fuga ducimus ipsa est, possimus sed, itaque eveniet soluta earum cum?',
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
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {elements}
      </Swiper>
    </StyledWrapper>
  );
}
