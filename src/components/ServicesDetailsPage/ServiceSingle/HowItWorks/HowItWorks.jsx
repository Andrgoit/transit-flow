import {
  StyledContainer,
  StyledMovieContainer,
  StyledTextContainer,
  StyledTitle,
  StyledText,
} from './HowItWorks.styled';

export default function HowItWorks() {
  return (
    <StyledContainer>
      <StyledMovieContainer>
        <iframe
          src="https://www.youtube.com/embed/cNOKQIw81SE?si=Zxjz-uB4myjIgu4l"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </StyledMovieContainer>
      <StyledTextContainer>
        <StyledTitle>How It Works</StyledTitle>
        <StyledText>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          doloremque laudantium.
        </StyledText>
        <StyledText>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis.
        </StyledText>
      </StyledTextContainer>
    </StyledContainer>
  );
}
