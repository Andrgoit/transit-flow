import { Banner, Blog } from './components';
import { blogPageEvents } from '../../data/blogData';

export default function BlogDetailsPage() {
  return (
    <>
      <Banner />
      <Blog events={blogPageEvents} />
    </>
  );
}
