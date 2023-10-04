import Label from '../../../../components/Label/Label';
import StyledBanner from '../../../../components/StyledBanner/StyledBanner';
import banner from '../../../../img/PricingPage/banner.jpg';

export default function Banner() {
  return (
    <StyledBanner img={banner}>
      <Label text="Pricing" dark />
      <h2 className=" font-bold text-[70px] text-white mt-2">Our Best Price</h2>
    </StyledBanner>
  );
}
