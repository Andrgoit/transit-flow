import {
  StyledHomePageBanner,
  StyledContainer,
  StyledContentContainer,
  StyledTitle,
} from './Banner.styled';

import Label from '../../../components/Label/Label';

export default function HomePageBanner() {
  return (
    <StyledHomePageBanner>
      <StyledContainer>
        <StyledContentContainer>
          <Label text="About Us" dark />
          {/* bg - "dark" or "light" */}
          <StyledTitle>About Our Logistics</StyledTitle>
        </StyledContentContainer>
      </StyledContainer>
    </StyledHomePageBanner>
  );
}
