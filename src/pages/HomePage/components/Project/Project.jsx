import CardsList from './CardsList/CardsList';
import LinkButton from '../../../../components/LinkButton/LinkButton';

export default function Project({ cards }) {
  return (
    <section className=" bg-white">
      <div className="flex flex-col items-center mb-[-250px]">
        <h3 className=" font-rubik font-semibold text-4xl text-heading-color mb-9">
          Transporting Across The World
        </h3>
        <CardsList cards={cards} />
        <LinkButton to="/project">More Work</LinkButton>
      </div>
      <div
        className=" w-full h-[400px]"
        style={{
          background:
            'linear-gradient(95deg,#ffb629 -1.19%,#ffda56 57.78%,#ffd7a6 115.08%)',
        }}
      />
    </section>
  );
}
