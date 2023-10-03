import Label from '../../../../components/Label/Label';
import LinkButton from '../../../../components/LinkButton/LinkButton';

export default function Services({ services }) {
  const elements = services.map(({ id, title, text, icon }) => (
    <li key={id} className="flex  flex-col items-start gap-5 w-[270px]">
      <div className="w-[49px] h-[56px]">
        <img src={icon} alt="icon" />
      </div>

      <div className="w-full pl-6" style={{ borderLeft: '1px solid #d8d8d8' }}>
        <h3 className=" font-rubik font-normal text-2xl text-heading-color mb-3">
          {title}
        </h3>
        <p className=" font-krab font-medium text-base text-paragraph-color">
          {text}
        </p>
      </div>
    </li>
  ));

  return (
    <section className=" bg-section-bg pt-24 pb-32">
      <div className="containerStyled flex flex-col items-center">
        <Label text="What We Do" />
        <h2 className=" font-rubik font-semibold text-4xl text-heading-color mt-4 mb-14">
          Safe & Reliable Cargo Solutions
        </h2>

        <ul className="flex flex-wrap gap-[192px]  gap-y-[70px] mb-[55px]">
          {elements}
        </ul>
        <LinkButton to="/services">More Works</LinkButton>
      </div>
    </section>
  );
}
