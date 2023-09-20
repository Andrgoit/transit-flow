import {
  StyledSection,
  StyledContainer,
  StyledTtileSection,
  StyledEventsList,
  StyledEventItem,
  StyledImgContainer,
  StyledDateContainer,
  StyledIconContainer,
  StyledDayText,
  StyledMonthText,
  StyledTextContainer,
  StyledTitle,
  StyledText,
  StyledTextListContainer,
  StyledTextItem,
  StyledImgLink,
  StyledButton,
} from './Blog.styled';

import Label from '../../../components/Label/Label';

import bg1 from '../../../img/HomePage/Blog/bg1.jpg';
import bg2 from '../../../img/HomePage/Blog/bg2.jpg';
import bg3 from '../../../img/HomePage/Blog/bg3.jpg';

import calendar from '../../../img/HomePage/Blog/calendar.svg';

const events = [
  {
    title: 'Inland freight a worthy solution for your business',
    img: bg1,
    date: { day: '08', month: 'September' },
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    textList: ['Urgent transport solutions', 'Reliable & experienced staffs'],
    href: '#',
  },
  {
    title: 'How technology can help redraw the supply chain map',
    img: bg2,
    date: { day: '12', month: 'September' },
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    textList: ['Urgent transport solutions', 'Reliable & experienced staffs'],
    href: '#',
  },

  {
    title: 'Five things you should have ready for your broker',
    img: bg3,
    date: { day: '25', month: 'September' },
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    textList: ['Urgent transport solutions', 'Reliable & experienced staffs'],
    href: '#',
  },
];

export default function Blog() {
  const elements = events.map(
    ({ title, img, date: { day, month }, text, textList, href }) => (
      <StyledEventItem key={title}>
        <StyledImgContainer bg={img}>
          <StyledImgLink to={href}>Read More</StyledImgLink>
        </StyledImgContainer>
        <StyledDateContainer>
          <StyledIconContainer>
            <img src={calendar} alt="calendar" />
          </StyledIconContainer>
          <StyledDayText>{day}</StyledDayText>
          <StyledMonthText>{month}</StyledMonthText>
        </StyledDateContainer>
        <StyledTextContainer>
          <StyledTitle to={href}>{title}</StyledTitle>
          <StyledText>{text}</StyledText>
          <StyledTextListContainer>
            {textList.map(item => (
              <StyledTextItem key={item}>{item}</StyledTextItem>
            ))}
          </StyledTextListContainer>
        </StyledTextContainer>
      </StyledEventItem>
    )
  );

  return (
    <StyledSection>
      <StyledContainer>
        <Label text="Our Blog" />
        <StyledTtileSection>Our Latest News</StyledTtileSection>
        <StyledEventsList>{elements}</StyledEventsList>
        <StyledButton to="/blog">More Blog</StyledButton>
      </StyledContainer>
    </StyledSection>
  );
}
