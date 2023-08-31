import img1 from '../../../../img/HomePage/Project/1.jpg';
import img2 from '../../../../img/HomePage/Project/2.jpg';
import img3 from '../../../../img/HomePage/Project/3.jpg';
import img4 from '../../../../img/HomePage/Project/4.jpg';
import img5 from '../../../../img/HomePage/Project/5.jpg';

import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledTitle,
  StyledText,
} from './CardsList.styled';

const cards = [
  { title: 'Liquid Transportation', img: img1, text: 'Premium Tankers' },
  { title: 'Packaging Solutions', img: img2, text: 'Warehouse Management' },
  { title: 'Contract Logistics', img: img3, text: 'Road Transportation' },
  { title: 'Warehouse & Distribution', img: img4, text: 'Large Warehouse' },
  { title: 'Specialized Transport', img: img5, text: 'Ocean Transports' },
];

export default function CardsList() {
  const elements = cards.map(({ title, img, text }) => (
    <StyledItem key={title} bg={img}>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledItem>
  ));
  return (
    <StyledContainer>
      <StyledList>{elements}</StyledList>
    </StyledContainer>
  );
}
