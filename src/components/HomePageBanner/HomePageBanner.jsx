import {
  StyledHomePageBanner,
  StyledContainer,
  StyledContentContainer,
  StyledImage,
  StyledTitle,
  StyledText,
  StyledButton,
} from "./HomePageBanner.styled";
import banner from "../../img/banners/HomePageBanner.jpg";
import Label from "components/Label/Label";

export default function HomePageBanner() {
  return (
    <StyledHomePageBanner>
      <StyledImage src={banner} alt="banner" />
      <StyledContainer>
        <StyledContentContainer>
          <Label text="Logistics & Supply Chain Solutions" bg="dark" />
          {/* bg - "dark" or "light" */}
          <StyledTitle>
            Your Gateway to any Destination in the World
          </StyledTitle>
          <StyledText>
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
          </StyledText>
          <StyledButton type="button">Explore More</StyledButton>
        </StyledContentContainer>
      </StyledContainer>
    </StyledHomePageBanner>
  );
}
