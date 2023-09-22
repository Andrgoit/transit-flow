// cmponents
import LinkButton from '../../LinkButton/LinkButton';

//img
import img from '../../../img/BlogDetailsPage/ship.jpg';
import { ReactComponent as Twitter } from '../../../img/BlogDetailsPage/tw.svg';
import { ReactComponent as Facebook } from '../../../img/BlogDetailsPage/fb.svg';
import { ReactComponent as Instagram } from '../../../img/BlogDetailsPage/inst.svg';
import { ReactComponent as Linkedin } from '../../../img/BlogDetailsPage/in.svg';

//data
const items = [
  { id: 1, icon: <Instagram />, href: '#' },
  { id: 2, icon: <Facebook />, href: '#' },
  { id: 3, icon: <Twitter />, href: '#' },
  { id: 4, icon: <Linkedin />, href: '#' },
];

const categories = [
  { id: 1, name: 'Shipping', items: '(3)' },
  { id: 2, name: 'Services', items: '(5)' },
  { id: 3, name: 'Transport', items: '(2)' },
  { id: 4, name: 'Warehouse', items: '(2)' },
  { id: 5, name: 'Transport Industries', items: '(5)' },
];

export default function Blog() {
  //рендерит иконки соц сетей (левая сторона)
  const socialLinks = items.map(({ id, icon, href }) => (
    <li key={id}>
      <a
        href={href}
        className="fill-heading-color transition-colors duration-200 hover:fill-primary-yelow"
      >
        {icon}
      </a>
    </li>
  ));

  //рендерит категории (правая сторона)
  const categoriesList = categories.map(({ name, items }) => (
    <li
      key={name}
      className="flex justify-between w-[354px] pb-4"
      style={{
        borderBottom: '1px solid #D6D6D6',
      }}
    >
      <span className=" font-rubik text-lg font-normal text-paragraph-color">
        {name}
      </span>
      <span className="font-rubik font-medium text-base text-heading-color">
        {items}
      </span>
    </li>
  ));
  return (
    <section className=" py-24">
      <div className="containerStyled flex justify-between">
        {/* левая сторона */}

        <div className="w-[664px]">
          <h3 className=" font-rubik text-4xl font-semibold text-heading-color mb-3">
            Your Logistics Solutions
          </h3>
          <p className=" font-krab text-paragraph-color font-medium text-base mb-7">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc.
            Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
            quis, porttitor leo Fusce lectus ex pretium[...]
          </p>
          <p className=" py-[50px] px-[55px] text-xl font-medium bg-primary-blue text-white italic mb-10">
            “Digitization within transport and logistics means seamless service
            to our customers, visibility in the supply chain, and driving a more
            efficient business.”
          </p>
          <h3 className=" font-rubik text-4xl font-semibold text-heading-color mb-3">
            Safest Logistics Solutions Provider With Integrity
          </h3>
          <p className=" font-krab text-paragraph-color font-medium text-base mb-7">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc.
            Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
            quis, porttitor leo Fusce lectus ex pretium[...]
          </p>
          <div className="w-[664px] h-[292px] mb-3">
            <img src={img} alt="ship" />
          </div>
          <p className=" font-krab text-paragraph-color font-medium text-base text-center mb-7">
            The Cargo Ship
          </p>
          <p className=" font-krab text-paragraph-color font-medium text-base  mb-7">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
            quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
            porttitor leo Fusce lectus ex pretium.
          </p>
          <p className=" font-krab text-paragraph-color font-medium text-base mb-7">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
            feugiat tempus Phasellus atquam.
          </p>
          <div
            className="flex justify-between pt-4 pb-5"
            style={{
              borderTop: '1px solid #D6D6D6',
              borderBottom: '1px solid #D6D6D6',
            }}
          >
            <ul className="flex gap-5 items-center">{socialLinks}</ul>
            <p className=" font-krab text-paragraph-color font-medium text-base">
              Category : Shipping
            </p>
          </div>
        </div>
        {/* правая сторона */}
        {/* Categories */}

        <div className="flex flex-col gap-11 w-[440px]">
          <div className=" py-11 px-10 bg-[#F5F5F5]">
            <h4 className=" font-rubik text-base font-semibold mb-7">
              Categories
            </h4>
            <ul className="flex flex-col gap-4">{categoriesList}</ul>
          </div>
          {/* How can we help you? */}
          <div className=" flex flex-col gap-7 py-11 px-10 bg-[#F5F5F5]">
            <h4 className=" font-rubik text-base font-semibold">
              How can we help you?
            </h4>
            <p className="font-krab text-paragraph-color font-medium text-base">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
              feugiat tempus Phasellus atquam.
            </p>
            <LinkButton to="/contact" yelow>
              Contact
            </LinkButton>
          </div>
          {/* Get In Touch */}
          <div className=" flex flex-col py-9 px-10 bg-primary-blue">
            <div className="flex items-center gap-3">
              <span className="w-[4px] h-[23px] bg-gradient-to-tl from-[#ffb629] from 0% via-[#ffda56] via 50.72% to-[#ffd7a6] to 100%"></span>
              <h4 className=" font-rubik  text-[22px] font-semibold text-white ">
                Get In Touch
              </h4>
            </div>
            <div
              className=" py-6"
              style={{
                borderBottom: '1px solid #1D2342',
              }}
            >
              <p className="font-rubik text-white font-medium text-lg">
                Need help?
              </p>
              <p className="font-rubik text-white font-medium text-lg">
                (00) 112 365 489
              </p>
            </div>
            <div className=" pt-6">
              <p className="font-rubik text-white font-medium text-lg">Email</p>
              <p className="font-rubik text-white font-medium text-lg">
                contact@logistics.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
