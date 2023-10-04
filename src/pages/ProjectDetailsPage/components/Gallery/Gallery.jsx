import GalleryList from '../../../../components/GalleryList/GalleryList';

export default function Gallery({ items }) {
  return (
    <section className="mb-[100px]">
      <div className="containerStyled">
        <h3 className=" font-rubik text-4xl font-semibold text-heading-color mb-[35px]">
          Related Project
        </h3>
        <GalleryList items={items} />
      </div>
    </section>
  );
}
