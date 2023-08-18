import {
  StyledContainer,
  StyledContentTitle,
  StyledIconContainer,
  StyledSocialItem,
  StyledIcon,
  StyledLink,
  StyledInput,
  StyledButtonContainer,
  StyledButton,
} from "./FooterContentSubscribe.styled";

import { ReactComponent as Facebook } from "../../../img/icons/header/facebook.svg";
import { ReactComponent as Twitter } from "../../../img/icons/header/twitter.svg";
import { ReactComponent as Linkedin } from "../../../img/icons/header/linkdin.svg";

export default function FooterContentSubscribe() {
  return (
    <StyledContainer>
      <StyledContentTitle>Subscribe</StyledContentTitle>
      <StyledInput type="text" placeholder="Enter text*" />
      <StyledButtonContainer>
        <StyledButton>Send Now</StyledButton>
        <StyledIconContainer>
          <StyledSocialItem>
            <StyledLink to="#">
              <StyledIcon>
                <Linkedin width="20px" />
              </StyledIcon>
            </StyledLink>
          </StyledSocialItem>

          <StyledSocialItem>
            <StyledLink to="#">
              <StyledIcon>
                <Twitter width="20px" />
              </StyledIcon>
            </StyledLink>
          </StyledSocialItem>

          <StyledSocialItem>
            <StyledLink to="#">
              <StyledIcon>
                <Facebook width="20px" />
              </StyledIcon>
            </StyledLink>
          </StyledSocialItem>
        </StyledIconContainer>
      </StyledButtonContainer>
    </StyledContainer>
  );
}
