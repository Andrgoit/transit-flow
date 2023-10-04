import { Banner, Contact, Faq } from './components';
import items from '../../data/contactData';

export default function ContactPage() {
  return (
    <>
      <Banner />
      <Contact items={items} />
      <Faq />
    </>
  );
}
