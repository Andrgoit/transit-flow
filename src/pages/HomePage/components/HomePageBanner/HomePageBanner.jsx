import banner from '../../../../img/banners/HomePageBanner.jpg';
import Label from '../../../../components/Label/Label';
import LinkButton from '../../../../components/LinkButton/LinkButton';

export default function HomePageBanner() {
  return (
    <div
      className="w-full h-[1035px] mt-[-78px]  relative"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="containerStyled flex flex-col justify-end mb-auto">
        <div className="flex flex-col w-[571px] absolute bottom-[218px] ">
          <Label text="Logistics & Supply Chain Solutions" dark />
          {/* bg - "dark" or "light" */}
          <h2 className=" font-rubik text-white font-bold text-6xl mt-2">
            Your Gateway to any Destination in the World
          </h2>
          <p className=" font-krab text-white text-base font-medium mt-2 mb-6">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{' '}
          </p>
          <LinkButton yelow>Explore More</LinkButton>
        </div>
      </div>
    </div>
  );
}
