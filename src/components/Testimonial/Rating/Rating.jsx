import star from '../../../img/HomePage/Testimonial/star.svg';

export default function Rating({ count }) {
  const myArray = Array(count).fill('');

  const elements = myArray.map((_, idx) => (
    <div
      className="w-[19px] h-[19px]"
      style={{ backgroundImage: `url(${star})` }}
      key={idx}
    />
  ));

  return <div className=" h-[19px] flex gap-[3px]">{elements}</div>;
}
