export default function Label({ text, dark = null }) {
  return (
    <div className="flex items-center">
      <div className="w-[4px] h-[23px] bg-gradient-to-tl from-[#ffb629] from 0% via-[#ffda56] via 50.72% to-[#ffd7a6] to 100%"></div>
      <p
        className={` text-sm px-[9px] py-[3px] leading-4 font-normal ${
          dark ? 'text-[#fff]' : 'text-[#1C1F35]'
        } ${dark ? 'bg-[#041c37]/50' : 'bg-[#e8e8e87f]/50'}`}
      >
        {text}
      </p>
    </div>
  );
}
