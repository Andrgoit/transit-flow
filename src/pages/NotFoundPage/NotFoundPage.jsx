import { Banner, LinkButton } from './components';

export default function NotFoundPage() {
  return (
    <>
      <Banner />
      <div className="pb-[50px] bg-white">
        <div className="containerStyled flex flex-col items-center">
          <span className=" font-rubik font-semibold text-[350px] text-heading-color">
            4<span className="text-primary-yelow">0</span>4
          </span>
          <p className=" font-rubik font-semibold text-4xl text-heading-color mb-2">
            Oops! Page not found.
          </p>
          <p className=" font-krab font-medium text-base text-paragraph-color mb-7">
            Let’s get you to where you need to be.
          </p>
          <LinkButton to="/" yelow>
            Back to Home
          </LinkButton>
        </div>
      </div>
    </>
  );
}
