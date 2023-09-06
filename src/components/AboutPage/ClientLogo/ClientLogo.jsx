import {
  StyledSection,
  StyledImgContent,
  StyledIcon,
  StyledContentRow,
} from './ClientLogo.styled';

import bg1 from '../../../img/HomePage/Contact/photo1.jpg';
import bg2 from '../../../img/HomePage/Contact/photo2.jpg';
import bg3 from '../../../img/HomePage/Contact/photo3.jpg';
import bg4 from '../../../img/HomePage/Contact/photo4.jpg';

import logo1 from '../../../img/HomePage/Contact/logo1.svg';
import logo2 from '../../../img/HomePage/Contact/logo2.svg';
import logo3 from '../../../img/HomePage/Contact/logo3.svg';
import logo4 from '../../../img/HomePage/Contact/logo4.svg';

export default function ClientLogo() {
  return (
    <StyledSection>
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
    </StyledSection>
  );
}
