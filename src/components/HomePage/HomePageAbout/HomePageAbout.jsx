import {
  HomePageAboutContainer,
  StyledBanner,
  StyledContentWrapper,
  StyledCounterWrapper,
} from './HomePageAbout.styled';
import HomePageAboutContent from 'components/HomePage/HomePageAboutContent/HomePageAboutContent';
import HomePageAboutCounter from 'components/HomePage/HomePageAboutCounter/HomePageAboutCounter';

export default function HomePageAbout() {
  return (
    <HomePageAboutContainer>
      <StyledBanner />
      <StyledContentWrapper>
        <HomePageAboutContent />
      </StyledContentWrapper>
      <StyledCounterWrapper>
        <HomePageAboutCounter />
      </StyledCounterWrapper>
    </HomePageAboutContainer>
  );
}
