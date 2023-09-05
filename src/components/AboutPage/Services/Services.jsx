import {
  StyledServices,
  StyledContainer,
  StyledContent,
  StyledTitleSection,
  StyledTitle,
  StyledContentList,
  StyledRow,
  StyledContentItem,
  StyledIconArea,
  StyledTextArea,
  StyledTextTitile,
  StyledText,
} from './Services.styled';

import Label from 'components/Label/Label';
import Button from './Button/Buttom';

import ship from '../../../img/icons/ship.png';
import box from '../../../img/icons/box.png';
import airplane from '../../../img/icons/airplane.png';
import car from '../../../img/icons/car.png';
import bell from '../../../img/icons/bell.svg';
import man from '../../../img/icons/man.svg';

export default function HomePageServices() {
  return (
    <StyledServices>
      <StyledContainer>
        <StyledContent>
          <StyledTitleSection>
            <Label text="What We Do" bg="light" />
            <StyledTitle>Our Logistics Services</StyledTitle>
          </StyledTitleSection>
          <StyledContentList>
            <StyledRow>
              <StyledContentItem>
                <StyledIconArea>
                  <img src={ship} alt="ship" />
                </StyledIconArea>
                <StyledTextArea>
                  <StyledTextTitile>Sea Transport Services</StyledTextTitile>
                  <StyledText>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </StyledText>
                </StyledTextArea>
              </StyledContentItem>

              <StyledContentItem>
                <StyledIconArea>
                  <img src={box} alt="box" />
                </StyledIconArea>
                <StyledTextArea>
                  <StyledTextTitile>Warehousing Services</StyledTextTitile>
                  <StyledText>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </StyledText>
                </StyledTextArea>
              </StyledContentItem>
              <StyledContentItem>
                <StyledIconArea>
                  <img src={airplane} alt="box" />
                </StyledIconArea>
                <StyledTextArea>
                  <StyledTextTitile>Air Fright Services</StyledTextTitile>
                  <StyledText>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </StyledText>
                </StyledTextArea>
              </StyledContentItem>
            </StyledRow>

            <StyledRow>
              <StyledContentItem>
                <StyledIconArea>
                  <img src={bell} alt="bell" />
                </StyledIconArea>
                <StyledTextArea>
                  <StyledTextTitile>Project & Exhibition</StyledTextTitile>
                  <StyledText>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </StyledText>
                </StyledTextArea>
              </StyledContentItem>

              <StyledContentItem>
                <StyledIconArea>
                  <img src={car} alt="car" />
                </StyledIconArea>
                <StyledTextArea>
                  <StyledTextTitile>Local Shipping Services</StyledTextTitile>
                  <StyledText>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </StyledText>
                </StyledTextArea>
              </StyledContentItem>

              <StyledContentItem>
                <StyledIconArea>
                  <img src={man} alt="man" />
                </StyledIconArea>
                <StyledTextArea>
                  <StyledTextTitile>Customer Clearance</StyledTextTitile>
                  <StyledText>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </StyledText>
                </StyledTextArea>
              </StyledContentItem>
            </StyledRow>
          </StyledContentList>
          <Button />
        </StyledContent>
      </StyledContainer>
    </StyledServices>
  );
}
