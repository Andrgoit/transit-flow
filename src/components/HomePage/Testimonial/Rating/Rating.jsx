import { StyledContainer, StyledStar } from './Rating.styled';

export default function Rating({ count }) {
  // console.log(count);
  // let arr = new Array(count);
  // const elements = arr.map((cell, ar) => <StyledStar key={ar} />);

  return (
    <StyledContainer>
      <StyledStar />
      <StyledStar />
      <StyledStar />
      <StyledStar />
      <StyledStar />
    </StyledContainer>
  );
}
