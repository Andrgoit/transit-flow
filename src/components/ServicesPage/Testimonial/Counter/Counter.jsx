import {
  StyledCounterList,
  StyledCounterItem,
  StyledNumbers,
  StyledDecor,
  StyledText,
} from './Counter.styled';

import items from './items';

export default function HomePageAboutCounter() {
  const elements = items.map(({ label, number }) => (
    <StyledCounterItem key={label}>
      <StyledNumbers>{number}</StyledNumbers>
      <StyledDecor />
      <StyledText>{label}</StyledText>
    </StyledCounterItem>
  ));
  return <StyledCounterList>{elements}</StyledCounterList>;
}
