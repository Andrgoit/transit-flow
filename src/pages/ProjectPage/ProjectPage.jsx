import { Banner, Gallery, Counter } from './components';
import { servicePageItems } from '../../data/counderData';

import { itemsBig } from '../../data/galleryData';

export default function ProjectPage() {
  return (
    <>
      <Banner />
      <Gallery items={itemsBig} />
      <Counter items={servicePageItems} />
    </>
  );
}
