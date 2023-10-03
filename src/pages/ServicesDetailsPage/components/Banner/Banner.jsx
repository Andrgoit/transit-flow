import banner from '../../../../img/ServicesDetailsPage/banner.jpg';

import Label from '../../../../components/Label/Label';
import StyledBanner from '../../../../components/StyledBanner/StyledBanner';

export default function Banner() {
  return (
    <StyledBanner img={banner}>
      <Label text="Service Single" dark />
      <h2 className=" font-bold text-[70px] text-white mt-2">
        Service Details
      </h2>
    </StyledBanner>
  );
}
