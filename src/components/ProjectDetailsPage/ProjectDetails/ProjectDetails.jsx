import img from '../../../img/ProjectDetailsPage/img.jpg';

const items = [
  { label: 'Customer', content: 'David Warner' },
  { label: 'Category', content: 'Warehouse Transportaion' },
  { label: 'Date', content: '12 December, 2022' },
  { label: 'Status', content: 'Completed' },
  { label: 'Tags', content: 'Life Style Travel , Best Delivery' },
];

export default function ProjectDetails() {
  return (
    <section className=" py-24 bg-section-bg">
      <div className="containerStyled">
        <div className="flex items-center gap-[66px]">
          <div className="w-[642px] h-[380px]">
            <img src={img} alt="car" width={642} />
          </div>
          <div>
            <h3 className=" font-rubik text-heading-color text-4xl font-semibold mb-10">
              Project Details
            </h3>
            <ul className="flex flex-col gap-5">
              {items.map(({ label, content }) => (
                <li
                  key={label}
                  className="flex items-center font-rubik text-heading-color text-xl"
                >
                  <span className=" block w-[114px]">{label}</span>:
                  <span className=" pl-2">{content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
