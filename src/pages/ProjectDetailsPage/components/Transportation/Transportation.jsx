import img from '../../../../img/icons/arrow.svg';

const items = [
  { id: 1, text: 'National Customer Service Center – 24 hours a day.' },
  {
    id: 2,
    text: 'Online shipping navigator lets you quote, book, and track shipments',
  },
  { id: 3, text: 'Your Logistics Needs Are At The Heart Of Our Business' },
  { id: 4, text: 'Very careful handling of valuable goods' },
  {
    id: 4,
    text: 'Time saving and convenient transportation services in your area',
  },
];

export default function Transportation() {
  return (
    <section className=" py-24">
      <div className="containerStyled">
        <h3 className=" font-rubik text-4xl text-heading-color font-normal mb-3">
          Wharehouse Transportation
        </h3>
        <p className=" font-krab text-paragraph-color text-base font-medium mb-[30px]">
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
          tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc.
          Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
          quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed,
          faucibus vel elit Integer adipiscing erat eget risus sollicitudin
          pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
          ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
          posuere.
        </p>

        <ul>
          {items.map(({ id, text }) => (
            <li className="flex items-center gap-[20px]" key={id}>
              <div className="w-[14px] h-[14px]">
                <img src={img} alt="arrow" />
              </div>
              <p className=" font-rubik text-xl text-heading-color">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
