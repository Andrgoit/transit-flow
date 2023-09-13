import {
  StyledBanner,
  StyledContainer,
  StyledContentContainer,
  StyledTitle,
} from './Banner.styled';

import Label from 'components/Label/Label';

export default function Banner() {
  return (
    <StyledBanner>
      <StyledContainer>
        <StyledContentContainer>
          <h3 className="">hello</h3>
          <Label text="Gallery" bg="dark" />
          {/* bg - "dark" or "light" */}
          <StyledTitle>Our Project</StyledTitle>
        </StyledContentContainer>
      </StyledContainer>
    </StyledBanner>
  );
}
