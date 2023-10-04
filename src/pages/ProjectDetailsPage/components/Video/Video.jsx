import video from '../../../../img/ProjectDetailsPage/video.jpg';

export default function Video() {
  return (
    <section className="mb-[100px]">
      <div className=" containerStyled">
        <h3 className=" font-rubik text-4xl font-semibold text-heading-color mb-[12px]">
          Our Project Transportation
        </h3>
        <p className=" font-krab text-sm text-paragraph-color mb-[30px]">
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
          tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc.
          Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
          quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed,
          faucibus vel elit Integer adipiscing erat eget risus sollicitudin
          pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
          ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
          posuere.
        </p>
        <div className=" h-[621px] max-w-full cursor-pointer">
          <img className="h-full object-cover" src={video} alt="video" />
        </div>
      </div>
    </section>
  );
}
