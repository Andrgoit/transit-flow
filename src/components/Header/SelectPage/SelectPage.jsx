import { useState } from 'react';
import { pages } from './pages';
import {
  StyledSelect,
  StyledOption,
  StyledLink,
  StyledOptionList,
} from './SelectPage.styled';

export default function SelectPage() {
  const [isOpen, setIsOpen] = useState(false);
  const elements = pages.map(({ label, href }) => (
    <StyledOption key={label} onClick={() => setIsOpen(false)}>
      <StyledLink to={href}>{label}</StyledLink>
    </StyledOption>
  ));

  return (
    <>
      <StyledSelect onClick={() => setIsOpen(!isOpen)}>
        Pages &#8895;
        {isOpen && <StyledOptionList>{elements}</StyledOptionList>}
      </StyledSelect>
    </>
  );
}
