export default function Counter({ items }) {
  const elements = items.map(({ label, number }) => {
    return (
      <li
        className=" flex justify-center items-center gap-4 pt-[46px] pr-[52px] pb-[51px] pl-[81px] border-solid border-[#d4d4d4] border-t-[1px] border-b-[1px] border-r-[1px] last:border-r-0 "
        key={label}
      >
        <span className=" font-rubik font-semibold text-[50px] text-heading-color">
          {number}
        </span>
        <span
          className=" block w-[17px] h-[17px]"
          style={{
            background:
              'linear-gradient(127deg, #ffb629 0%, #ffda56 50.72%, #ffd7a6 100%)',
          }}
        ></span>
        <p className="font-krab text-xl text-heading-color font-normal">
          {label}
        </p>
      </li>
    );
  });
  return (
    <ul className="flex justify-center items-center last:border-r-0">
      {elements}
    </ul>
  );
}
