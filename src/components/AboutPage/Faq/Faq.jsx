import {
  StyledSection,
  StyledWrapper,
  StyledTextSection,
  StyledImgSection,
  StyledTitle,
  StyledContentWrapper,
  StyledContentTitle,
  StyledIconContainer,
  StyledIcon,
  StyledIconText,
  StyledButton,
} from './Faq.styled';
import Label from '../../../components/Label/Label';

import Accordion from './Accordion/Accordion';

export default function Faq() {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledTextSection>
          <Label text="FAQ" />
          <StyledTitle>Frequently Asked Questions</StyledTitle>
          <Accordion />
        </StyledTextSection>
        <StyledImgSection>
          <StyledContentWrapper>
            <Label text="Let's Talk" bg="dark" />
            <StyledContentTitle>
              You need any help? get free consultation
            </StyledContentTitle>
            <StyledIconContainer>
              <StyledIcon />
              <StyledIconText>
                Have Any Questions (00) 111 222 333
              </StyledIconText>
            </StyledIconContainer>
            <StyledButton to="/contact">Contact Us</StyledButton>
          </StyledContentWrapper>
        </StyledImgSection>
      </StyledWrapper>
    </StyledSection>
  );
}
