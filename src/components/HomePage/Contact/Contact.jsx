import {
  StyledSection,
  StyledContainer,
  StyledContentContainer,
  StyledContentRow,
  StyledTextContent,
  StyledFormContent,
  StyledTitle,
  StyledText,
  StyledIconListColumn,
  StyledIconItem,
  StyledIconWrapper,
  StyledIconText,
} from './Contact.styled';
import Label from '../../../components/Label/Label';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import ClientLogo from '../../ClientLogo/ClientLogo';

import mail from '../../../img/HomePage/Contact/mail.svg';
import phone from '../../../img/HomePage/Contact/phone.svg';
import time from '../../../img/HomePage/Contact/time.svg';

export default function Contact() {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledContentContainer>
          <StyledContentRow>
            <StyledTextContent>
              <Label text="Contact" dark />
              <StyledTitle>Get in touch with us</StyledTitle>
              <StyledText>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </StyledText>
              <StyledIconListColumn>
                <StyledIconItem>
                  <StyledIconWrapper bg={mail} />
                  <StyledIconText>Email contact@logistics.com</StyledIconText>
                </StyledIconItem>

                <StyledIconItem>
                  <StyledIconWrapper bg={phone} />
                  <StyledIconText>Call Us (00) 112 365 489</StyledIconText>
                </StyledIconItem>

                <StyledIconItem>
                  <StyledIconWrapper bg={time} />
                  <StyledIconText>
                    Mon - Sat 9.00 - 18.00 Sunday Closed
                  </StyledIconText>
                </StyledIconItem>
              </StyledIconListColumn>
            </StyledTextContent>
            <StyledFormContent>
              <SubscribeForm />
            </StyledFormContent>
          </StyledContentRow>
          <ClientLogo />
        </StyledContentContainer>
      </StyledContainer>
    </StyledSection>
  );
}
