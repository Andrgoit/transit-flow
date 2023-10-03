import Label from '../../../../components/Label/Label';
import Accordion from './Accordion/Accordion';
import LinkButton from '../../../../components/LinkButton/LinkButton';

import bg from '../../../../img/AboutPage/Faq/bg.jpg';
import icon from '../../../../img/AboutPage/Faq/phone.svg';

export default function Faq() {
  return (
    <section className="py-[100px] bg-secondary-gray">
      <div className=" flex justify-end gap-[197px]">
        <div className="w-[681px]">
          <Label text="FAQ" />
          <h3 className=" font-rubik font-semibold text-4xl text-heading-color w-[308px] mt-4 mb-[50px]">
            Frequently Asked Questions
          </h3>
          <Accordion />
        </div>
        <div
          className="w-[682px] h-[539px] relative"
          style={{ background: `url(${bg})` }}
        >
          <div className=" w-[448px] h-[368px] py-[52px] px-[62px] bg-[#091242] absolute top-[86px] left-[-126px] flex flex-col gap-[21px] ">
            <Label text="Let's Talk" dark />
            <p className=" font-rubik font-medium text-xl text-white capitalize">
              You need any help? get free consultation
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-[63px] h-[63px]"
                style={{ backgroundImage: `url(${icon})` }}
              />
              <p className=" font-krab font-medium text-white text-base w-[153px]">
                Have Any Questions (00) 111 222 333
              </p>
            </div>
            <LinkButton yelow to="/contact">
              Contact Us
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
