import items from './items';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './example.css';

export default function Accord() {
  return (
    <Accordion preExpanded={['a']}>
      {items.map(({ id, title, content }) => (
        <AccordionItem key={title} uuid={id}>
          <AccordionItemHeading>
            <AccordionItemButton>{title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{content}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
