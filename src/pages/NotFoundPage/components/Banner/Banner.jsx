import Label from '../../../../components/Label/Label';
import StyledBanner from '../../../../components/StyledBanner/StyledBanner';

import banner from '../../../../img/NotFoundPage/banner.jpg';

export default function Banner() {
  return (
    <StyledBanner img={banner}>
      <Label text="Oops!" dark />
      <h2 className=" font-bold text-[70px] text-white mt-2">Page Not Found</h2>
    </StyledBanner>
  );
}
