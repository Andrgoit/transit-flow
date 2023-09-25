import items from './data';

export default function ClientLogo() {
  const elements = items.map(({ id, bg, icon }) => (
    <div
      key={id}
      className="w-1/4 h-[234px] flex justify-center items-center"
      style={{
        background: `linear-gradient(0deg, #111c54 0%, rgba(17, 28, 84, 0) 98.72%), url(${bg}) lightgray 50% / cover no-repeat`,
      }}
    >
      {icon}
    </div>
  ));
  return <div className="containerStyled flex ">{elements}</div>;
}
