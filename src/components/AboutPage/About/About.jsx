import {
  AboutContainer,
  StyledContainer,
  StyledTextArea,
  StyledTitle,
  StyledTextContainer,
  StyledText,
  StyledImgArea,
  StyledContentImage,
  StyledButtonContainer,
  StyledButton,
} from './About.styled';

import Buttom from './Button/Buttom';

import Label from 'components/Label/Label';

export default function About() {
  return (
    <AboutContainer>
      <StyledContainer>
        <StyledImgArea>
          <StyledContentImage />
        </StyledImgArea>

        <StyledTextArea>
          <Label text="About Us" bg="light" />
          <StyledTitle>Our Company Overview</StyledTitle>
          <StyledTextContainer>
            <StyledText>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </StyledText>
            <StyledButtonContainer>
              <StyledButton to="#">Our Approch</StyledButton>
              <StyledButton to="#">Our Approch</StyledButton>
              <StyledButton to="#">Our Approch</StyledButton>
            </StyledButtonContainer>
            <StyledText>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem quia
              voluptassit.
            </StyledText>
          </StyledTextContainer>
          <Buttom />
        </StyledTextArea>
      </StyledContainer>
    </AboutContainer>
  );
}
