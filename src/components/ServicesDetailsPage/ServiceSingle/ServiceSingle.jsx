import { StyledSection, StyledContainer } from './ServiceSingle.styled';
import SeaTransport from './SeaTransport/SeaTransport';
import BeneFit from './BeneFit/BeneFit';
import HowItWorks from '../../../components/ServicesDetailsPage/ServiceSingle/HowItWorks/HowItWorks';

export default function ServiceSingle() {
  return (
    <StyledSection>
      <StyledContainer>
        <SeaTransport />
        <BeneFit />
        <HowItWorks />
      </StyledContainer>
    </StyledSection>
  );
}
