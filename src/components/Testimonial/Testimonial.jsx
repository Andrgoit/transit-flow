import Label from '../../components/Label/Label';
import SwiperContent from './SwiperContent/SwiperContent';

export default function Testimonial({ users, grey = false }) {
  return (
    <section className={` py-24 ${grey ? 'bg-secondary-gray' : 'bg-white'}`}>
      <div className="containerStyled flex flex-col">
        <Label text="Testimonial" />
        <h2 className=" font-rubik font-semibold text-4xl text-heading-color mt-3 mb-10">
          What Our Customer Say
        </h2>
        <SwiperContent users={users} grey={grey} />
      </div>
    </section>
  );
}
