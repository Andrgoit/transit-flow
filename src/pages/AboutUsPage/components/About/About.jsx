import { Link } from 'react-router-dom';

import LinkButton from '../../../../components/LinkButton/LinkButton';
import Label from '../../../../components/Label/Label';

import bg from '../../../../img/AboutPage/About/big.jpg';
import image from '../../../../img/AboutPage/About/small.jpg';

export default function About() {
  return (
    <section className=" py-[100px] bg-white flex justify-center">
      <div className="flex gap-[100px]">
        <div
          className=" relative w-[726px] h-[486px]"
          style={{
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div
            className=" absolute w-[264px] h-[258px] -bottom-[45px] -right-[40px]"
            style={{
              background: `url(${image})`,
              borderTop: '25px solid #fff',
              borderLeft: '25px solid #fff ',
            }}
          />
        </div>

        <div className=" w-[472px] flex flex-col items-start">
          <Label text="About Us" />
          <h3 className=" font-rubik font-semibold text-4xl text-heading-color my-3">
            Our Company Overview
          </h3>

          <p className=" font-krab font-medium text-base text-paragraph-color mb-5">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className=" flex justify-center gap-[14px] mb-7">
            <Link
              className=" w-[194px] py-4 px-[38px] font-krab font-semibold text-lg text-heading-color cursor-pointer transition-colors duration-300 bg-secondary-gray hover:text-white hover:bg-primary-yelow"
              to="#"
            >
              Our Approch
            </Link>
            <Link
              className=" w-[194px] py-4 px-[38px] font-krab font-semibold text-lg text-heading-color cursor-pointer transition-colors duration-300 bg-secondary-gray hover:text-white hover:bg-primary-yelow"
              to="#"
            >
              Our Approch
            </Link>
            <Link
              className=" w-[194px] py-4 px-[38px] font-krab font-semibold text-lg text-heading-color cursor-pointer transition-colors duration-300 bg-secondary-gray hover:text-white hover:bg-primary-yelow"
              to="#"
            >
              Our Approch
            </Link>
          </div>
          <p className=" font-krab font-medium text-base text-paragraph-color mb-9">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
          </p>
          <LinkButton to="/blog">Learn More</LinkButton>
        </div>
      </div>
    </section>
  );
}
