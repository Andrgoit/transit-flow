import {
  StyledContainer,
  StyledInfoList,
  StyledInfoItem,
  StyledInfoIcon,
  StyledInfoText,
} from "./Info.styled";

import oclock from "../../../img/icons/header/oclock.svg";
import email from "../../../img/icons/header/email.svg";
import phone from "../../../img/icons/header/phone.svg";

export default function Info() {
  return (
    <StyledContainer>
      <StyledInfoList>
        <StyledInfoItem>
          <StyledInfoIcon>
            <img src={oclock} alt="oclock" width="63px" />
          </StyledInfoIcon>
          <StyledInfoText>Mon - Sat 9.00 - 18.00 Sunday Closed</StyledInfoText>
        </StyledInfoItem>

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
      </StyledInfoList>
    </StyledContainer>
  );
}
