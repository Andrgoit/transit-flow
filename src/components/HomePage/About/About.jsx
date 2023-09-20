import {
  HomePageAboutContainer,
  StyledBanner,
  StyledContentWrapper,
  StyledCounterWrapper,
} from './About.styled';
import Content from '../../../components/HomePage/About/Content/Content';
import Counter from '../../../components/HomePage/About/Counter/Counter';

export default function HomePageAbout() {
  return (
    <HomePageAboutContainer>
      <StyledBanner />
      <StyledContentWrapper>
        <Content />
      </StyledContentWrapper>
      <StyledCounterWrapper>
        <Counter />
      </StyledCounterWrapper>
    </HomePageAboutContainer>
  );
}
