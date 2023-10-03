export default function HowItWorks() {
  return (
    <div className="flex justify-center items-center gap-16">
      <div className="w-[645px] h-[376px] aspect-video">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/cNOKQIw81SE?si=Zxjz-uB4myjIgu4l"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="py-[52px] pl-16 ">
        <h3 className=" font-rubik font-semibold text-4xl text-heading-color mb-4">
          How It Works
        </h3>
        <p className=" font-krab font-medium text-base text-paragraph-color mb-10">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          doloremque laudantium.
        </p>
        <p className=" font-krab font-medium text-base text-paragraph-color">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis.
        </p>
      </div>
    </div>
  );
}
