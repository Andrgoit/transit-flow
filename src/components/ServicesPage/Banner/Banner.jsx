import {
  StyledBanner,
  StyledContainer,
  StyledContentContainer,
  StyledTitle,
} from './Banner.styled';

import Label from '../../../components/Label/Label';

export default function Banner() {
  return (
    <StyledBanner>
      <StyledContainer>
        <StyledContentContainer>
          <Label text="Services" dark />
          {/* bg - "dark" or "light" */}
          <StyledTitle>Our Logistics Service</StyledTitle>
        </StyledContentContainer>
      </StyledContainer>
    </StyledBanner>
  );
}
