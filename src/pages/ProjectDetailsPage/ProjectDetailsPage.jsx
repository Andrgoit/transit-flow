import {
  Banner,
  Gallery,
  ProjectDetails,
  Transportation,
  Video,
} from './components';

import { itemsSmall } from '../../data/galleryData';

export default function ProjectDetailsPage() {
  return (
    <>
      <Banner />
      <ProjectDetails />
      <Transportation />
      <Video />
      <Gallery items={itemsSmall} />
    </>
  );
}
