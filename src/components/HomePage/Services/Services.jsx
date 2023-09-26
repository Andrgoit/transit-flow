import Label from '../../../components/Label/Label';

export default function Services({ services }) {
  const elements = services.map(({ id, title, text, icon }) => (
    <li key={id} className="flex justify-between w-[398px]">
      <div>
        <img src={icon} alt="icon" />
      </div>

      <div
        className="w-[270px] pl-6"
        style={{ borderLeft: '1px solid #d8d8d8' }}
      >
        <h3 className=" font-rubik font-normal text-2xl text-heading-color">
          {title}
        </h3>
        <p className=" font-krab font-medium text-base text-paragraph-color">
          {text}
        </p>
      </div>
    </li>
  ));

  return (
    <section className=" bg-white pt-24 pb-32">
      <div className="containerStyled">
        <div className=" flex justify-between">
          <div className=" flex flex-col">
            <Label text="What We Do" />
            <h2 className=" font-rubik font-semibold text-4xl text-heading-color w-[294px] mt-4">
              Safe & Reliable Cargo Solutions
            </h2>
          </div>
          <ul className="flex justify-between flex-wrap gap-y-[70px]">
            {elements}
          </ul>
        </div>
      </div>
    </section>
  );
}
