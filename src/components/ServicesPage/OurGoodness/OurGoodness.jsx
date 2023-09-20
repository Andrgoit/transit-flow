import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  StyledWrapper,
  StyledImgContainer,
  StyledImg,
  StyledList,
  StyledItem,
  StyledIcon,
  StyledtextWrapper,
  StyledIconTitile,
  SrtledIconText,
} from './OurGoodness.styled';

import Label from '../../../components/Label/Label';

import icon1 from '../../../img/ServicesPage/box.svg';
import icon2 from '../../../img/ServicesPage/sheild.svg';
import icon3 from '../../../img/ServicesPage/environment.svg';

export default function OurGoodness() {
  return (
    <StyledSection>
      <StyledContainer>
        <Label text="Our Goodness" />
        <StyledTitle>How We Works</StyledTitle>
        <StyledWrapper>
          <StyledImgContainer>
            <StyledImg />
          </StyledImgContainer>
          <StyledList>
            <StyledItem>
              <StyledIcon>
                <img src={icon1} alt="icon" width="49px" />
              </StyledIcon>
              <StyledtextWrapper>
                <StyledIconTitile>Warehousing Services</StyledIconTitile>
                <SrtledIconText>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking{' '}
                </SrtledIconText>
              </StyledtextWrapper>
            </StyledItem>

            <StyledItem>
              <StyledIcon>
                <img src={icon2} alt="icon" width="49px" />
              </StyledIcon>
              <StyledtextWrapper>
                <StyledIconTitile>Safety & Quality</StyledIconTitile>
                <SrtledIconText>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking{' '}
                </SrtledIconText>
              </StyledtextWrapper>
            </StyledItem>

            <StyledItem>
              <StyledIcon>
                <img src={icon3} alt="icon" width="49px" />
              </StyledIcon>
              <StyledtextWrapper>
                <StyledIconTitile>Care for Environment</StyledIconTitile>
                <SrtledIconText>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking{' '}
                </SrtledIconText>
              </StyledtextWrapper>
            </StyledItem>
          </StyledList>
        </StyledWrapper>
      </StyledContainer>
    </StyledSection>
  );
}
