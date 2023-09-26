import { Banner, Blog } from '../../components/BlogPage';
import { blogPageEvents } from '../../data/blogData';

export default function BlogPage() {
  return (
    <>
      <Banner />
      <Blog events={blogPageEvents} />
    </>
  );
}
