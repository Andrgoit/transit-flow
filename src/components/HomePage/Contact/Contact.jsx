import {
  StyledSection,
  StyledContainer,
  StyledContentContainer,
  StyledContentRow,
  StyledTextContent,
  StyledFormContent,
  StyledImgContent,
  StyledIcon,
  StyledTitle,
  StyledText,
  StyledIconListColumn,
  StyledIconItem,
  StyledIconWrapper,
  StyledIconText,
} from './Contact.styled';
import Label from 'components/Label/Label';
import SubscribeForm from './SubscribeForm/SubscribeForm';

import bg1 from '../../../img/HomePage/Contact/photo1.jpg';
import bg2 from '../../../img/HomePage/Contact/photo2.jpg';
import bg3 from '../../../img/HomePage/Contact/photo3.jpg';
import bg4 from '../../../img/HomePage/Contact/photo4.jpg';

import logo1 from '../../../img/HomePage/Contact/logo1.svg';
import logo2 from '../../../img/HomePage/Contact/logo2.svg';
import logo3 from '../../../img/HomePage/Contact/logo3.svg';
import logo4 from '../../../img/HomePage/Contact/logo4.svg';

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
              <Label text="Contact" bg="dark" />
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
          <StyledContentRow>
            <StyledImgContent bg={bg1}>
              <StyledIcon width="" height="">
                <img src={logo1} alt="" />
              </StyledIcon>
            </StyledImgContent>
            <StyledImgContent bg={bg2}>
              <StyledIcon width="" height="">
                <img src={logo2} alt="" />
              </StyledIcon>
            </StyledImgContent>
            <StyledImgContent bg={bg3}>
              <StyledIcon width="" height="">
                <img src={logo3} alt="" />
              </StyledIcon>
            </StyledImgContent>
            <StyledImgContent bg={bg4}>
              <StyledIcon width="" height="">
                <img src={logo4} alt="" />
              </StyledIcon>
            </StyledImgContent>
          </StyledContentRow>
        </StyledContentContainer>
      </StyledContainer>
    </StyledSection>
  );
}
