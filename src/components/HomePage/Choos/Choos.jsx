import {
  StyledContainer,
  StyledImageSide,
  StyledImageContainer,
  StyledLabel,
  StyledLabelIcon,
  StyledLabelText,
  StyledContentSide,
  StyledContentContainer,
  StyledContentTitile,
  StyledContentText,
  StyledIconsContainer,
  StyledIconsColumn,
  StyledIconsItem,
  StyledIcon,
  StyledIconText,
} from './Choos.styled';
import Label from 'components/Label/Label';

// import icons
import box from '../../../img/icons/box_round.png';
import world from '../../../img/icons/world_round.png';
import clock from '../../../img/icons/clock_round.png';
import ship from '../../../img/icons/ship_round.png';
import handfree from '../../../img/icons/handfree_round.png';
import money from '../../../img/icons/money_round.png';

export default function Choos() {
  return (
    <StyledContainer>
      <StyledImageSide>
        <StyledImageContainer>
          <StyledLabel>
            <StyledLabelIcon />
            <StyledLabelText>
              Moving your products across borders
            </StyledLabelText>
          </StyledLabel>
        </StyledImageContainer>
      </StyledImageSide>
      <StyledContentSide>
        <StyledContentContainer>
          <Label text="Why Choose" bg="light" />
          <StyledContentTitile>
            We create opportunity to reach potential
          </StyledContentTitile>
          <StyledContentText>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.{' '}
          </StyledContentText>
          <StyledIconsContainer>
            <StyledIconsColumn>
              <StyledIconsItem>
                <StyledIcon bg={box} />
                <StyledIconText>Safe Package</StyledIconText>
              </StyledIconsItem>

              <StyledIconsItem>
                <StyledIcon bg={world} />
                <StyledIconText>Global Tracking</StyledIconText>
              </StyledIconsItem>

              <StyledIconsItem>
                <StyledIcon bg={clock} />
                <StyledIconText>In Time Delivery</StyledIconText>
              </StyledIconsItem>
            </StyledIconsColumn>

            <StyledIconsColumn>
              <StyledIconsItem>
                <StyledIcon bg={ship} />
                <StyledIconText>Ship Everyware</StyledIconText>
              </StyledIconsItem>

              <StyledIconsItem>
                <StyledIcon bg={handfree} />
                <StyledIconText>24/7 Support</StyledIconText>
              </StyledIconsItem>

              <StyledIconsItem>
                <StyledIcon bg={money} />
                <StyledIconText>Transparant Pricing</StyledIconText>
              </StyledIconsItem>
            </StyledIconsColumn>
          </StyledIconsContainer>
        </StyledContentContainer>
      </StyledContentSide>
    </StyledContainer>
  );
}
