import Label from '../../../../components/Label/Label';
import StyledBanner from '../../../../components/StyledBanner/StyledBanner';
import banner from '../../../../img/AboutPage/Banner/banner.jpg';

export default function Banner() {
  return (
    <StyledBanner img={banner}>
      <Label text="About Us" dark />
      {/* bg - "dark" or "light" */}
      <h2 className=" font-bold text-[70px] text-white mt-2">
        About Our Logistics
      </h2>
    </StyledBanner>
  );
}
