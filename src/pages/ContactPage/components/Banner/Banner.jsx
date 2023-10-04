import Label from '../../../../components/Label/Label';
import StyledBanner from '../../../../components/StyledBanner/StyledBanner';

import banner from '../../../../img/ContactPage/banner.jpg';

export default function Banner() {
  return (
    <StyledBanner img={banner}>
      <Label text="Contact" dark />
      <h2 className=" font-bold text-[70px] text-white mt-2">Contact Us</h2>
    </StyledBanner>
  );
}
