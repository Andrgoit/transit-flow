import SeaTransport from './SeaTransport/SeaTransport';
import BeneFit from './BeneFit/BeneFit';
import HowItWorks from './HowItWorks/HowItWorks';

export default function ServiceSingle() {
  return (
    <section className="py-[100px]">
      <div className="containerStyled flex flex-col items-center">
        <SeaTransport />
        <BeneFit />
        <HowItWorks />
      </div>
    </section>
  );
}
