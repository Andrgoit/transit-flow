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
          <Label text="Service Single" dark />
          {/* "dark" */}
          <StyledTitle>Service Details</StyledTitle>
        </StyledContentContainer>
      </StyledContainer>
    </StyledBanner>
  );
}
