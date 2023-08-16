import inst from "../../../img/icons/header/instagram.svg";
import facebook from "../../../img/icons/header/facebook.svg";
import twitter from "../../../img/icons/header/twitter.svg";
import linkedin from "../../../img/icons/header/linkdin.svg";

import {
  StyledSocialList,
  StyledSocialItem,
  StyledLink,
  StyledIcon,
  StyledImg,
} from "./SocialLinks.styled";

export default function SocialLinks() {
  return (
    <StyledSocialList>
      <StyledSocialItem>
        <StyledLink to="#">
          <StyledIcon>
            <StyledImg src={inst} alt="Instagramm" width="19px" />
          </StyledIcon>
        </StyledLink>
      </StyledSocialItem>

      <StyledSocialItem>
        <StyledLink to="#">
          <StyledIcon>
            <StyledImg src={facebook} alt="facebook" width="19px" />
          </StyledIcon>
        </StyledLink>
      </StyledSocialItem>

      <StyledSocialItem>
        <StyledLink to="#">
          <StyledIcon>
            <StyledImg src={twitter} alt="twitter" width="19px" />
          </StyledIcon>
        </StyledLink>
      </StyledSocialItem>

      <StyledSocialItem>
        <StyledLink to="#">
          <StyledIcon>
            <StyledImg src={linkedin} alt="linkedin" width="19px" />
          </StyledIcon>
        </StyledLink>
      </StyledSocialItem>
    </StyledSocialList>
  );
}
