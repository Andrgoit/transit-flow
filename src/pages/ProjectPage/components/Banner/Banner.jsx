import Label from '../../../../components/Label/Label';
import StyledBanner from '../../../../components/StyledBanner/StyledBanner';

import banner from '../../../../img/ProjectPage/banner.jpg';

export default function Banner() {
  return (
    <StyledBanner img={banner}>
      <Label text="Gallery" dark />
      <h2 className=" font-bold text-[70px] text-white mt-2">Our Project</h2>
    </StyledBanner>
  );
}
