import ClientLogoList from '../../../../components/ClientLogo/ClientLogo';

export default function ClientLogo({ items }) {
  return (
    <section className=" pb-[100px] bg-white">
      <div className="containerStyled">
        <ClientLogoList items={items} />
      </div>
    </section>
  );
}
