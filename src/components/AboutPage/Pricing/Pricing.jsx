import {
  StyledSection,
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledList,
  StyledItem,
  StyledTitleContainer,
  StyledItemTitle,
  StyledMonth,
  StyledPrice,
  StyledLists,
  StyledListsItem,
  StyledButton,
} from './Pricing.styled';
import prices from './prices';
import Label from 'components/Label/Label';

export default function Pricing() {
  const elements = prices.map(({ name, price, href, lists }) => (
    <StyledItem key={name}>
      <StyledTitleContainer>
        <StyledItemTitle>{name}</StyledItemTitle>
        <StyledMonth>
          <StyledPrice>${price}</StyledPrice>/month
        </StyledMonth>
      </StyledTitleContainer>
      <StyledLists>
        {lists.map(list => (
          <StyledListsItem key={list}>{list}</StyledListsItem>
        ))}
      </StyledLists>
      <StyledButton to={href}>Choose Plan</StyledButton>
    </StyledItem>
  ));
  return (
    <StyledSection>
      <StyledContainer>
        <StyledHeader>
          <Label text="Pricing" />
          <StyledTitle>Our Best Pricing</StyledTitle>
        </StyledHeader>
        <StyledList>{elements}</StyledList>
      </StyledContainer>
    </StyledSection>
  );
}
