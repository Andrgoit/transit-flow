import {
  StyledContainer,
  StyledContentContainer,
  StyledTitleSection,
  StyledCardList,
  StyledCardItem,
  StyledImgContainer,
  StyledTextContainer,
  StyledName,
  StyledPosition,
  StyledSocialSection,
  StyledLink,
} from './Team.styled';

import Label from 'components/Label/Label';

import user1 from '../../../img/HomePage/Team/1.jpg';
import user2 from '../../../img/HomePage/Team/2.jpg';
import user3 from '../../../img/HomePage/Team/3.jpg';

import ln from '../../../img/HomePage/Team/In.svg';
import tw from '../../../img/HomePage/Team/tw.svg';
import fb from '../../../img/HomePage/Team/fb.svg';
import inst from '../../../img/HomePage/Team/inst.svg';

const cards = [
  {
    name: 'Jessca Arow',
    img: user1,
    position: 'Designer',
    linkedin: false,
    twitter: true,
    facebook: true,
    instagram: true,
  },
  {
    name: 'Kathleen Smith',
    img: user2,
    position: 'Designer',
    linkedin: true,
    twitter: true,
    facebook: true,
    instagram: true,
  },
  {
    name: 'Rebecca Tylor',
    img: user3,
    position: 'Designer',
    linkedin: false,
    twitter: false,
    facebook: true,
    instagram: true,
  },
];

export default function Team() {
  const elements = cards.map(
    ({
      name,
      img,
      position,
      linkedin = null,
      twitter = null,
      facebook = null,
      instagram = null,
    }) => (
      <StyledCardItem key={name}>
        <StyledImgContainer>
          <img src={img} alt={name} />
          <StyledSocialSection>
            {linkedin ? (
              <StyledLink to={linkedin}>
                <img src={ln} alt={name} />
              </StyledLink>
            ) : null}
            {twitter ? (
              <StyledLink to={twitter}>
                <img src={tw} alt={name} />
              </StyledLink>
            ) : null}
            {facebook ? (
              <StyledLink to={facebook}>
                <img src={fb} alt={name} />
              </StyledLink>
            ) : null}
            {instagram ? (
              <StyledLink to={instagram}>
                <img src={inst} alt={name} />
              </StyledLink>
            ) : null}
          </StyledSocialSection>
        </StyledImgContainer>
        <StyledTextContainer>
          <StyledName>{name}</StyledName>
          <StyledPosition>{position}</StyledPosition>
        </StyledTextContainer>
      </StyledCardItem>
    )
  );

  return (
    <StyledContainer>
      <StyledContentContainer>
        <Label text="The Transporters" />
        <StyledTitleSection>Meet Expert Team</StyledTitleSection>
        <StyledCardList>{elements}</StyledCardList>
      </StyledContentContainer>
    </StyledContainer>
  );
}
