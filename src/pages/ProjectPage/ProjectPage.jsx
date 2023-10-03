import { Banner, Gallery } from '../../components/ProjectPage';
import Counter from '../../components/Counter/Counter';
import { servicePageItems } from '../../data/counderData';

export default function ProjectPage() {
  return (
    <>
      <Banner />
      <Gallery />
      <Counter items={servicePageItems} />
    </>
  );
}
