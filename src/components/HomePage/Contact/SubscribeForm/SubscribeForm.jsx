import { useState } from 'react';
import {
  StyledContainer,
  StyledForm,
  StyledInputRow,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from './SubscribeForm.styled';

export default function SubscribeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const input = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'city':
        setCity(value);
        break;

      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const subscribe = e => {
    e.preventDefault();
    const send = { name, email, number, city, message };
    console.log(send);
    setName('');
    setEmail('');
    setNumber('');
    setCity('');
    setMessage('');
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={subscribe}>
        <StyledInputRow>
          <StyledInput
            onChange={input}
            placeholder="Your name*"
            required
            name="name"
            value={name}
          />
          <StyledInput
            onChange={input}
            placeholder="Email*"
            required
            name="email"
            value={email}
          />
        </StyledInputRow>
        <StyledInputRow>
          <StyledInput
            onChange={input}
            placeholder="Phone Number*"
            required
            name="number"
            value={number}
          />
          <StyledInput
            onChange={input}
            placeholder="City*"
            required
            name="city"
            value={city}
          />
        </StyledInputRow>
        <StyledTextArea
          onChange={input}
          placeholder="Your Message"
          rows="6"
          name="message"
          value={message}
        />
        <StyledButton type="submit">Submit Message</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}
