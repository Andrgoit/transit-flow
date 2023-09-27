import { useState } from 'react';

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
    <>
      <form className="w-[758px] flex flex-col gap-[31px]" onSubmit={subscribe}>
        <div className=" flex flex-wrap gap-[28px] gap-y-[31px]">
          <input
            className="subscribeInput"
            style={{ border: '1px solid #4e5683' }}
            onChange={input}
            placeholder="Your name*"
            required
            name="name"
            value={name}
            autoComplete="off"
          />
          <input
            className="subscribeInput"
            style={{ border: '1px solid #4e5683' }}
            onChange={input}
            placeholder="Email*"
            required
            name="email"
            value={email}
            autoComplete="off"
          />

          <input
            className="subscribeInput"
            style={{ border: '1px solid #4e5683' }}
            onChange={input}
            placeholder="Phone Number*"
            required
            name="number"
            value={number}
            autoComplete="off"
          />
          <input
            className="subscribeInput"
            style={{ border: '1px solid #4e5683' }}
            onChange={input}
            placeholder="City*"
            required
            name="city"
            value={city}
            autoComplete="off"
          />

          <textarea
            className="subscribeTextarea "
            style={{ border: '1px solid #4e5683' }}
            onChange={input}
            placeholder="Your Message"
            rows="6"
            name="message"
            value={message}
          />
        </div>
        <button
          className="  py-5 px-9 font-krab text-base font-semibold text-heading-color cursor-pointer hover:text-paragraph-color transition-colors duration-200 ease-in-out"
          style={{
            background:
              'linear-gradient(94deg,#ffb629 -1.21%,#ffda56 58.66%,#ffd7a6 116.84%)',
          }}
          type="submit"
        >
          Submit Message
        </button>
      </form>
    </>
  );
}
