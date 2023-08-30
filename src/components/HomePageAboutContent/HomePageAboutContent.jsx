import {
  StyledContainer,
  StyledTextArea,
  StyledTitle,
  StyledTextContainer,
  StyledText,
  StyledIconsArea,
  StyledIconItem,
  StyledIcon,
  StyledImg,
  StyledIconTitle,
  StyledImgArea,
  StyledContentImage,
} from './HomePageAboutContent.styled';

import box from '../../img/icons/box_round.png';
import money from '../../img/icons/money_round.png';

import Label from 'components/Label/Label';

export default function HomePageAboutContent() {
  return (
    <StyledContainer>
      <StyledTextArea>
        <Label text="Why Us" bg="light" />
        <StyledTitle>
          We provide full range global logistics solution
        </StyledTitle>
        <StyledTextContainer>
          <StyledText>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </StyledText>
          <StyledText>
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </StyledText>
        </StyledTextContainer>
        <StyledIconsArea>
          <StyledIconItem>
            <StyledIcon>
              <StyledImg src={box} alt="" width="58px" />
            </StyledIcon>
            <StyledIconTitle>Delivery on Time</StyledIconTitle>
          </StyledIconItem>
          <StyledIconItem>
            <StyledIcon>
              <StyledImg src={money} alt="" width="58px" />
            </StyledIcon>
            <StyledIconTitle>Optimized Travel Cost</StyledIconTitle>
          </StyledIconItem>
        </StyledIconsArea>
      </StyledTextArea>
      <StyledImgArea>
        <StyledContentImage />
      </StyledImgArea>
    </StyledContainer>
  );
}
