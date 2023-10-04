import Label from '../../../../components/Label/Label';
import StyledBanner from '../../../../components/StyledBanner/StyledBanner';
import banner from '../../../../img/ProjectDetailsPage/banner.jpg';

export default function Banner() {
  return (
    <StyledBanner img={banner}>
      <Label text="Warehouse Transportation" dark />
      <h2 className="text-6xl text-white font-bold mt-2">
        Air Cargo Transportation
      </h2>
    </StyledBanner>
  );
}
