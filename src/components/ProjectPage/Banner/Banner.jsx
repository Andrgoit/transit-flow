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
          <Label text="Gallery" dark />
          {/* "dark"  */}
          <StyledTitle>Our Project</StyledTitle>
        </StyledContentContainer>
      </StyledContainer>
    </StyledBanner>
  );
}
