import {
  StyledWrapper,
  StyledContainer,
  StyledList,
  StyledItem,
  StyledImgContainer,
  StyledLink,
  StyledIcon,
} from './Gallery.styled';

import img1 from '../../../img/ProjectPage/gallery/1.jpg';
import img2 from '../../../img/ProjectPage/gallery/2.jpg';
import img3 from '../../../img/ProjectPage/gallery/3.jpg';
import img4 from '../../../img/ProjectPage/gallery/4.jpg';
import img5 from '../../../img/ProjectPage/gallery/5.jpg';
import img6 from '../../../img/ProjectPage/gallery/6.jpg';

const items = [
  { id: '1', href: '/project/details', img: img1 },
  { id: '2', href: '/project/details', img: img2 },
  { id: '3', href: '/project/details', img: img3 },
  { id: '4', href: '/project/details', img: img4 },
  { id: '5', href: '/project/details', img: img5 },
  { id: '6', href: '/project/details', img: img6 },
];

export default function Gallery() {
  const elements = items.map(({ id, href, img }) => (
    <StyledItem key={id}>
      <StyledImgContainer bg={img}>
        <StyledLink to={href}>
          <StyledIcon />
        </StyledLink>
      </StyledImgContainer>
    </StyledItem>
  ));
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledList>{elements}</StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
}
