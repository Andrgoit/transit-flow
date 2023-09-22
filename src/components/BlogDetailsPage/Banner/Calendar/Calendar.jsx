import icon from '../../../../img/BlogDetailsPage/icon.svg';

export default function Calendar() {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-[51px] h-[56px]">
        <img src={icon} alt="calendar icon" />
      </div>
      <div className="flex flex-col">
        <span className=" font-rubik text-[40px] text-white font-semibold">
          12
        </span>
        <span className=" font-krab text-base text-white font-medium">
          March
        </span>
      </div>
    </div>
  );
}
