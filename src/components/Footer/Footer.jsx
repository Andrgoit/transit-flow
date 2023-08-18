import {
  StyledWrapper,
  StyledTitleSection,
  StyledContentSection,
  StyledCopyrightSection,
  StyledLogo,
  StyledLogoText,
  StyledContent,
  StyledInfoItem,
  StyledInfoIcon,
  StyledInfoText,
  StyledInfoContainer,
  StyledLogoImgContainer,
} from "./Footer.styled";

import logo from "../../img/icons/header/logo.svg";
import email from "../../img/icons/header/email.svg";
import phone from "../../img/icons/header/phone.svg";
import FooterContentPages from "./FooterContentPages/FooterContentPages";
import FooterContentUtilites from "./FooterContentUtilites/FooterContentUtilites";
import FooterContentSubscribe from "./FooterContentSubscribe/FooterContentSubscribe";
import CopyrightBlock from "./CopyrightBlock/CopyrightBlock";

export default function Footer() {
  return (
    <StyledWrapper>
      <StyledTitleSection />
      <StyledContentSection />
      <StyledCopyrightSection>
        <CopyrightBlock />
      </StyledCopyrightSection>

      <StyledContent>
        <StyledLogo>
          <StyledLogoImgContainer>
            <img src={logo} alt="" width="210px" height="36px" />
          </StyledLogoImgContainer>
          <StyledLogoText>
            Leverage agile frameworks to provide a robust synopsis for strategy
            collaborative thinking to further the overall value proposition.
          </StyledLogoText>
          <StyledInfoContainer>
            <StyledInfoItem>
              <StyledInfoIcon>
                <img src={email} alt="email" />
              </StyledInfoIcon>
              <StyledInfoText>Email contact@logistics.com</StyledInfoText>
            </StyledInfoItem>

            <StyledInfoItem>
              <StyledInfoIcon>
                <img src={phone} alt="phone" />
              </StyledInfoIcon>
              <StyledInfoText>Call Us (00) 112 365 489</StyledInfoText>
            </StyledInfoItem>
          </StyledInfoContainer>
        </StyledLogo>
        <FooterContentPages />
        <FooterContentUtilites />
        <FooterContentSubscribe />
      </StyledContent>
    </StyledWrapper>
  );
}
