import { StyledContainer, StyledStar } from './Rating.styled';

export default function Rating({ count }) {
  const myArray = Array.from({ length: count }, (_, index) => index + 1);

  const elements = myArray.map(i => <StyledStar key={i} />);

  return <StyledContainer>{elements}</StyledContainer>;
}
