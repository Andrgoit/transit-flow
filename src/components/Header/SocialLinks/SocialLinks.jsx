import { ReactComponent as Inst } from "../../../img/icons/header/instagram.svg";
import { ReactComponent as Facebook } from "../../../img/icons/header/facebook.svg";
import { ReactComponent as Twitter } from "../../../img/icons/header/twitter.svg";
import { ReactComponent as Linkedin } from "../../../img/icons/header/linkdin.svg";

import {
  StyledSocialList,
  StyledSocialItem,
  StyledLink,
  StyledIcon,
} from "./SocialLinks.styled";

export default function SocialLinks() {
  return (
    <StyledSocialList>
      <StyledSocialItem>
        <StyledLink to="#">
          <StyledIcon>
            <Inst width="19px" />
          </StyledIcon>
        </StyledLink>
      </StyledSocialItem>

      <StyledSocialItem>
        <StyledLink to="#">
          <StyledIcon>
            <Facebook width="19px" />
          </StyledIcon>
        </StyledLink>
      </StyledSocialItem>

      <StyledSocialItem>
        <StyledLink to="#">
          <StyledIcon>
            <Twitter width="19px" />
          </StyledIcon>
        </StyledLink>
      </StyledSocialItem>

      <StyledSocialItem>
        <StyledLink to="#">
          <StyledIcon>
            <Linkedin width="19px" />
          </StyledIcon>
        </StyledLink>
      </StyledSocialItem>
    </StyledSocialList>
  );
}
