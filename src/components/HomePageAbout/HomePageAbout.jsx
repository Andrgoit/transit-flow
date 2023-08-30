import {
  HomePageAboutContainer,
  StyledBanner,
  StyledContentWrapper,
  StyledCounterWrapper,
} from './HomePageAbout.styled';
import HomePageAboutContent from 'components/HomePageAboutContent/HomePageAboutContent';
import HomePageAboutCounter from 'components/HomePageAboutCounter/HomePageAboutCounter';

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
