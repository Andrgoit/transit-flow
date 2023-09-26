import {
  StyledContainer,
  StyledContentContainer,
  StyledTitleSection,
} from './Testimonial.styled';

import Label from '../../../components/Label/Label';
import SwiperContent from './SwiperContent/SwiperContent';

import Counter from '../../../components/Counter/Counter';
import { servicePageItems } from '../../../data/counderData';

export default function Testimonial() {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <Label text="Testimonial" />
        <StyledTitleSection>What Our Customer Say</StyledTitleSection>
        <SwiperContent />
      </StyledContentContainer>
      <Counter items={servicePageItems} />
    </StyledContainer>
  );
}
