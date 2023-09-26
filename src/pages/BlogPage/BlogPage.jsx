import { Banner, Blog } from '../../components/BlogPage';
import events from '../../data/blogData';

export default function BlogPage() {
  return (
    <>
      <Banner />
      <Blog events={events} />
    </>
  );
}
